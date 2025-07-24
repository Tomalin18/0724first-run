import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Heart, Truck, Users, Star, Award } from 'lucide-react'

export default function AboutPage() {
  const features = [
    {
      icon: Shield,
      title: "隱私保護",
      description: "我們嚴格保護每位客戶的隱私，提供安全且隱密的購物環境。"
    },
    {
      icon: Heart,
      title: "專業品質",
      description: "精選高品質商品，每件產品都經過嚴格的品質檢驗程序。"
    },
    {
      icon: Truck,
      title: "快速配送",
      description: "提供快速且隱密的配送服務，確保您的隱私得到最佳保護。"
    },
    {
      icon: Users,
      title: "專業服務",
      description: "經驗豐富的客服團隊，提供專業諮詢與完善的售後服務。"
    }
  ]

  const stats = [
    { number: "50,000+", label: "滿意客戶" },
    { number: "99.8%", label: "客戶好評" },
    { number: "24/7", label: "客戶服務" },
    { number: "5", label: "服務年資" }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl fade-in">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          關於 Vibe Store
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          我們致力於為客戶提供最優質的產品與最專業的服務，在保護客戶隱私的前提下，創造最佳的購物體驗。
        </p>
      </div>

      {/* Mission Section */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-3xl text-center">我們的使命</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">專業與品質的承諾</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                自成立以來，我們始終堅持為客戶提供最高品質的產品和服務。我們深知每位客戶對於隱私和品質的重視，
                因此我們建立了嚴格的品質控制標準和隱私保護機制。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                我們的團隊由經驗豐富的專業人員組成，致力於為每位客戶提供個性化的服務體驗，
                讓您能夠安心地享受我們的產品和服務。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-lg border">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          為什麼選擇我們
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-3xl text-center">我們的價值觀</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">誠信經營</h3>
              <p className="text-sm text-muted-foreground">
                以誠信為本，建立與客戶之間的信任關係
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">品質至上</h3>
              <p className="text-sm text-muted-foreground">
                堅持高品質標準，為客戶提供最優質的產品
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">客戶至上</h3>
              <p className="text-sm text-muted-foreground">
                以客戶需求為導向，提供最佳的服務體驗
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl text-center">聯繫我們</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              如果您有任何疑問或需要協助，歡迎隨時聯繫我們的客服團隊
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">客服電話</h4>
                <p className="text-primary font-medium">0800-123-456</p>
                <p className="text-sm text-muted-foreground">週一至週五 9:00-18:00</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">電子郵件</h4>
                <p className="text-primary font-medium">support@vibestore.com</p>
                <p className="text-sm text-muted-foreground">24小時內回覆</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">線上客服</h4>
                <Badge variant="outline" className="text-primary border-primary">
                  即將推出
                </Badge>
                <p className="text-sm text-muted-foreground">即時線上諮詢</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}