import { HTMLAttributes } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@tanstack/react-router'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/password-input'
import { RegisterPayload, RegisterResponse } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { useAuthApi } from '@/api'
import { Cookie } from '@/lib/cookie'
import { CookieEnum } from '@/enum'

type SignUpFormProps = HTMLAttributes<HTMLFormElement>

const formSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: 'Please enter your name' }),
    password: z
      .string()
      .min(1, {
        message: 'Please enter your password',
      })
      .min(7, {
        message: 'Password must be at least 7 characters long',
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ['confirmPassword'],
  })

export function SignUpForm({ className, ...props }: SignUpFormProps) {
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      password: '',
      confirmPassword: '',
    },
  })

  const {
    mutate: registerRequest,
    isPending: registerPending,
  } = useMutation<RegisterResponse, Error, RegisterPayload>({
    mutationFn: useAuthApi.register,
    onSuccess: (response) => {
      toast.success('帳號創建成功！')

      Cookie.set(CookieEnum.AccessToken, response.token.accessTokenJWT)
      Cookie.set(CookieEnum.RefreshToken, response.token.refreshTokenJWT)

      navigate({ to: '/' })
    },
    onError: (error) => {
      console.error('註冊失敗:', error)
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const payload: RegisterPayload = {
      name: data.name,
      password: data.password,
    }

    registerRequest(payload)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('grid gap-3', className)}
        {...props}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="mt-2"
          disabled={registerPending}
          type="submit"
        >
          {registerPending ? '創建中...' : '創建帳號'}
        </Button>
      </form>
    </Form>
  )
}
