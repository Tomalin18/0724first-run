Create a complete, maintainable, and optimized Next.js App Router project. The design should be unique and avoid generic AI-generated looks, with custom-designed components that reflect the brand's personality.

## IMPORTANT: Complete Multi-Page Website Required
**CRITICAL**: This is a 3-page website. You MUST create ALL 3 pages, not just the first one.
**Required Pages**: "現代企業官網", "設計師作品集", "生活風格部落格"
**Navigation**: Implement a complete navigation system that links to all pages.
**File Structure**: Create separate page files for each page (e.g., app/about/page.tsx, app/contact/page.tsx, etc.)
**Routing**: Use Next.js App Router conventions for all pages.

## Project Structure & Maintainability:
- **Next.js App Router**: Use the latest App Router conventions with proper file-based routing.
- **Multi-Page Structure**: Create individual page files for each of the 3 pages.
- **Modular Components**: Each major section (Hero, Features, Testimonials, etc.) should be its own reusable React component file (e.g., `components/sections/HeroSection.tsx`).
- **Shared Layout**: Implement a global layout in `app/layout.tsx` with navigation to all pages.
- **Page Assembly**: Each page should assemble its specific sections in its respective page.tsx file.
- **UI Components**: Create custom UI components (e.g., custom cards, buttons) in `components/ui/` if they deviate significantly from shadcn/ui defaults.
- **Utilities**: Use `lib/utils.ts` for helper functions.
- **Clean Code**: Ensure code is well-organized, readable, and follows best practices for a scalable project.
- **Assets**: Place images and other static assets in the `public/` directory.

## Brand DNA & Custom Component Style:
**Overall Style**: 科技未來
**Color Scheme**: 毛玻璃的綠色
**Typography**: 手寫風格
**Spacing & Layout**: 寬鬆
**Additional Requirements**: 我喜歡網站有許多動畫效果

**Custom Component Design Rules (Crucial for Uniqueness)**:
- **NO standard shadcn/ui component look**: Design custom variants for cards, buttons, inputs, etc.
- **Containers**: Use unique shapes (e.g., floating panels, tilted boxes, layered elements), creative borders, custom shadows, and non-rectangular forms.
- **Buttons**: Implement distinct designs (e.g., pill shapes, custom hover states, gradient borders, morphing effects).
- **Typography**: Create a custom hierarchy with varied font weights, sizes, and line heights that reflect the brand.
- **Spacing**: Break traditional grid patterns; use innovative whitespace and visual rhythm.
- **Imagery**: Apply unique image treatments (e.g., custom masks, creative overlays, asymmetric crops).
- **Asymmetry**: Embrace offset elements, varied heights, and creative alignments to avoid a generic feel.
- **Backgrounds**: Utilize subtle patterns, gradient meshes, or geometric shapes instead of flat colors.

## Navigation System:
Create a comprehensive navigation system that includes:
- **Header Navigation**: Main navigation bar with links to all 3 pages
- **Mobile Navigation**: Responsive mobile menu for all pages
- **Footer Navigation**: Footer links to key pages
- **Active States**: Highlight the current page in navigation
- **Smooth Transitions**: Add hover and transition effects

## Page 1: 現代企業官網
**File**: app/現代企業官網/page.tsx (or app/page.tsx for home)
### Section 1: 透明導航 (navigation)
Nav: creative menu design, custom hover states, unique mobile menu
Background: rgba(255, 255, 255, 0.95) with creative treatment

### Section 2: 漸層主視覺 (hero)
Creative hero: asymmetric layout, custom button with gradient border, floating elements
Title: "引領未來的創新企業"
Subtitle: "我們運用最新技術和創新思維，為客戶創造無限可能"
Background: #1F2937 with creative treatment

### Section 3: 成就數據 (stats)
Stats: creative number displays, custom backgrounds, animated counters
Stats: 4 metrics, creative number displays
Background: #F8FAFC with creative treatment

### Section 4: 核心優勢 (features)
Feature cards: tilted containers, creative icons, varied heights, custom hover effects
Title: "為什麼選擇我們"
Subtitle: "專業團隊 × 創新技術 × 優質服務"
Features (3): 快速響應(Zap), 安全可靠(Shield), 持續創新(Rocket)
Background: #FFFFFF with creative treatment

### Section 5: 客戶見證 (testimonials)
Testimonial design: quote bubbles, creative author layouts, asymmetric cards
Title: "客戶怎麼說"
Testimonials (2): Creative quote layouts
Background: #1F2937 with creative treatment

### Section 6: 行動呼籲 (cta)
CTA design: morphing button, creative background, unique shape containers
Title: "準備開始您的數位轉型之旅？"
Subtitle: "立即聯絡我們，獲得免費諮詢和專業建議"
Background: #3B82F6 with creative treatment

### Section 7: 現代頁尾 (footer)
Footer: creative column layouts, custom dividers, unique link styling
Background: #111827 with creative treatment

## Page 2: 設計師作品集
**File**: app/設計師作品集/page.tsx (or app/page.tsx for home)
### Section 1: 創意導航 (navigation)
Nav: creative menu design, custom hover states, unique mobile menu
Background: #FFFFFF with creative treatment

### Section 2: 設計師介紹 (hero)
Creative hero: asymmetric layout, custom button with gradient border, floating elements
Title: "設計改變世界"
Subtitle: "UI/UX設計師 · 品牌視覺專家"
Background: #8B5CF6 with creative treatment

### Section 3: 設計服務 (features)
Feature cards: tilted containers, creative icons, varied heights, custom hover effects
Title: "設計服務"
Features (3): 品牌設計(Palette), 網站設計(Monitor), App設計(Smartphone)
Background: #F8FAFC with creative treatment

### Section 4: 設計作品 (gallery)
Gallery: creative grid breaks, custom image masks, floating hover effects
Title: "精選作品"
Gallery: 3 images, creative grid layout
Background: #FFFFFF with creative treatment

## Page 3: 生活風格部落格
**File**: app/生活風格部落格/page.tsx (or app/page.tsx for home)
### Section 1: 部落格導航 (navigation)
Nav: creative menu design, custom hover states, unique mobile menu
Background: #FFFFFF with creative treatment

### Section 2: 部落格標題 (hero)
Creative hero: asymmetric layout, custom button with gradient border, floating elements
Title: "生活的美好時光"
Subtitle: "分享旅行、美食、生活中的點點滴滴"
Background: #FEF3C7 with creative treatment

### Section 3: 精選文章 (blog)
Blog: creative post cards, custom meta layouts, unique image treatments
Title: "最新文章"
Blog: 3 posts, creative card layouts
Background: #FFFFFF with creative treatment

### Section 4: 部落格分類 (features)
Feature cards: tilted containers, creative icons, varied heights, custom hover effects
Title: "熱門分類"
Features (4): 旅遊(MapPin), 美食(Coffee), 居家(Home)
Background: #F9FAFB with creative treatment

## Final Creative & Technical Requirements:
**Multi-Page Completion**: ENSURE ALL 3 PAGES ARE FULLY IMPLEMENTED with their respective sections and content.
**Technical**: Use shadcn/ui components as a base, but heavily customize their appearance with Tailwind CSS to achieve the unique design. Ensure full responsiveness (mobile-first).
**Routing**: Implement proper Next.js App Router file structure with working navigation between all pages.
**Creative Mandate**: Every single component and section must feel hand-crafted and uniquely tailored to the brand, not like a standard template. Focus on innovative visual patterns and interactions.
**Brand Integration**: Components should embody the brand's personality, story, and style in their design, shapes, and animations.
**Consistency**: Maintain design consistency across all 3 pages while allowing each page to have its unique character.
**Avoid**: Generic, off-the-shelf shadcn/ui looks, predictable layouts, and designs that scream 'AI-generated'.
**Embrace**: Bold creative interpretation, strong brand identity expression, memorable visual moments, and storytelling through design.

## Delivery Checklist:
□ All 3 pages created with proper file structure
□ Working navigation system linking all pages
□ Responsive design across all pages
□ Custom-styled components (not generic shadcn/ui)
□ Brand-consistent design across all pages
□ Proper Next.js App Router implementation
