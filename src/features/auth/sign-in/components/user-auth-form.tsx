import { HTMLAttributes } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/password-input'
import { useMutation } from '@tanstack/react-query'
import { useAuthApi } from '@/api'
import { Cookie } from '@/lib/cookie'
import { CookieEnum } from '@/enum'
import { LoginResponse } from '@/types'

type UserAuthFormProps = HTMLAttributes<HTMLFormElement>

const formSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'Please enter your username' }),
  password: z
    .string()
    .min(1, {
      message: 'Please enter your password',
    })
    .min(7, {
      message: 'Password must be at least 7 characters long',
    }),
})

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const {
    mutate: SignInRequest,
    isPending: SignInRequestPending,
  } = useMutation<LoginResponse, Error, z.infer<typeof formSchema>>({
    mutationFn: async (data) => {
      const response = await useAuthApi.login({
        name: data.username,
        password: data.password,
      })
      return response
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    SignInRequest(data, {
      onSuccess: (data) => {
        Cookie.set(CookieEnum.AccessToken, data.token.accessTokenJWT)
        Cookie.set(CookieEnum.RefreshToken, data.token.refreshTokenJWT)
      },
      onError: () => {
        console.error('error')
      },
    })
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="name@example.com"
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
            <FormItem className="relative">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <Link
                to="/forgot-password"
                className="text-muted-foreground absolute -top-0.5 right-0 text-sm font-medium hover:opacity-75"
              >
                Forgot password?
              </Link>
            </FormItem>
          )}
        />
        <Button
          className="mt-2"
          disabled={SignInRequestPending}
        >
          Login
        </Button>
      </form>
    </Form>
  )
}
