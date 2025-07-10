import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            歡迎來到
            <span className="text-blue-600 dark:text-blue-400"> E-Notebook</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            一個現代化的筆記和任務管理平台，幫助您提高生產力和組織能力
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-3"
            >
              <Link to="/sign-in">立即登入</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3"
            >
              <Link to="/sign-up">註冊帳號</Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-600 dark:text-blue-400">📝 智能筆記</CardTitle>
              <CardDescription>
                創建、組織和管理您的筆記，支援富文本編輯和標籤分類
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                使用先進的編輯器創建豐富的筆記內容，支援圖片、連結和多種格式。
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-green-600 dark:text-green-400">✅ 任務管理</CardTitle>
              <CardDescription>
                追蹤您的任務和專案進度，設定優先級和截止日期
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                直觀的任務管理介面，幫助您保持專注並按時完成目標。
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-purple-600 dark:text-purple-400">🤝 團隊協作</CardTitle>
              <CardDescription>
                與團隊成員共享筆記和任務，促進有效溝通
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                安全的團隊協作功能，讓您與同事無縫合作。
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-4">準備開始了嗎？</h2>
              <p className="text-blue-100 mb-6">
                加入數千名用戶的行列，開始您的生產力之旅
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3"
              >
                <Link to="/sign-up">免費註冊</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}