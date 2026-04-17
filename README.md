# AutoElite - Modern E-Commerce Platform

AutoElite is a modern e-commerce platform built with Next.js 15, featuring a fully functional shopping experience with responsive design, clean architecture, and modern UI components. This production-ready application integrates with the FakeStore API and showcases best practices in React development.

## 🚀 Tech Stack

- **Next.js 15+** (App Router, React 19+)
- **Tailwind CSS v4** (Zero-config with @theme)
- **Redux Toolkit** (State management)
- **Redux Persist** (SSR-safe persistence)
- **TanStack Query v5** (Server state management)
- **Axios** (HTTP client)
- **TypeScript** (Strict mode)
- **Lucide Icons** (Icon library)

## 🎯 Key Features

### 🛒 Shopping Experience

- **Product Catalog** - Browse products with category filtering
- **Product Detail Pages** - Detailed view with images, descriptions, and ratings
- **Shopping Cart** - Add/remove items, quantity management, persistent storage
- **Star Ratings** - Visual rating display for products

### 📱 Responsive Design

- **Mobile-First** - Optimized for all screen sizes (mobile, tablet, desktop)
- **Mobile Menu** - Hamburger navigation for small screens
- **Responsive Layouts** - Adaptive grids and spacing
- **Touch-Friendly** - Proper touch targets and interactions

### 🎨 Modern UI Components

- **Modal Component** - Reusable modal with React Portal, animations, and accessibility
- **Counter Component** - Quantity selector with +/- buttons
- **Button Component** - Styled buttons with variants (primary, outline, etc.)
- **Input Component** - Form inputs with validation support
- **Breadcrumb Component** - Navigation breadcrumbs
- **Star Rating Component** - Visual star rating display

### 💾 State Management

- **Redux Toolkit** - Centralized state for cart and user data
- **Redux Persist** - Persistent cart storage across sessions
- **TanStack Query** - Optimized data fetching and caching
- **Type-Safe** - Full TypeScript support throughout

### 🌟 User Experience

- **Add to Cart Modal** - Beautiful animated success modal with product preview
- **Loading States** - Skeleton loaders and spinners
- **Error Handling** - Graceful error states and fallbacks
- **Smooth Transitions** - Animations and micro-interactions

## 📁 Folder Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Home page (product listing)
│   ├── cart/
│   │   └── page.tsx            # Shopping cart page
│   ├── products/
│   │   └── [id]/
│   │       ├── page.tsx        # Product detail page
│   │       └── not-found.tsx   # 404 for products
│   ├── login/
│   │   └── page.tsx            # Login page
│   ├── register/
│   │   └── page.tsx            # Registration page
│   └── _components/
│       ├── Card/               # Product card component
│       ├── Grid/               # Product grid layout
│       ├── FilterSidebar/      # Category filter sidebar
│       └── ListCard/            # List view of products
├── components/
│   ├── providers.tsx           # Root providers wrapper
│   ├── composites/
│   │   ├── Navbar/             # Navigation bar (responsive)
│   │   └── Footer/             # Footer component
│   └── ui/
│       ├── Modal/              # Reusable modal component
│       │   ├── Modal.types.ts
│       │   ├── Modal.variants.ts
│       │   └── index.tsx
│       ├── Button/             # Button component
│       ├── Counter/            # Quantity counter
│       ├── Input/              # Input fields
│       ├── Loading/            # Loading spinner
│       ├── StarRating/         # Star rating display
│       ├── Breadcrumb/         # Navigation breadcrumbs
│       └── Accordion/          # Accordion component
├── features/
│   ├── products/
│   │   ├── models/             # Product types
│   │   ├── services/           # API services
│   │   └── hooks/              # React hooks
│   ├── carts/
│   │   ├── models/             # Cart types
│   │   ├── services/           # API services
│   │   └── hooks/              # React hooks
│   ├── auth/
│   │   ├── models/             # Auth types
│   │   ├── services/           # API services
│   │   ├── validations/        # Form validations
│   │   └── hooks/              # React hooks
│   └── users/
│       ├── models/             # User types
│       ├── services/           # API services
│       └── hooks/              # React hooks
├── store/
│   ├── store.ts                # Redux store configuration
│   ├── persist.ts              # Persist configuration
│   ├── hooks.ts                # Typed hooks
│   └── slices/
│       └── cartSlice.ts        # Cart state management
├── providers/
│   ├── query-provider.tsx      # QueryClientProvider wrapper
│   └── redux-provider.tsx      # Redux Provider wrapper
├── libs/
│   ├── axios.ts                # Axios instance
│   └── query-client.ts         # TanStack Query instance
├── hooks/
│   └── use-disclosure.ts       # Modal disclosure hook
├── styles/
│   └── globals.css             # Tailwind v4 entry + @theme
├── types/
│   └── css.d.ts                # CSS type definitions
└── utils/
    └── cn.ts                   # Classname utility
```

## 🏗️ Architecture

This application follows a feature-based architecture with clear separation of concerns:

- **Presentation Layer** (`app/`, `components/`, `hooks/`) → UI components, pages, custom hooks
- **Feature Layer** (`features/`) → Business logic organized by domain (products, carts, auth, users)
- **State Layer** (`store/`, `providers/`) → Global state management
- **Utility Layer** (`libs/`, `utils/`, `types/`) → Shared utilities and types

## 📦 Setup Instructions

### 1. Clone and Install

```bash
git clone <repository-url>
cd AutoElite
npm install
```

### 2. Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your API configuration:

```env
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

## 🎨 UI Components Showcase

### Modal Component

A fully-featured modal component built with React Portal:

```typescript
<Modal
  isOpen={isOpen}
  onClose={onClose}
  size="md"
  showCloseButton={true}
  closeOnOverlayClick={true}
  closeOnEscape={true}
>
  <div>Your content here</div>
</Modal>
```

**Features:**

- React Portal for proper z-index stacking
- Escape key support
- Click outside to close
- Body scroll lock
- Multiple size variants (sm, md, lg, xl, full)
- Accessibility attributes
- Smooth animations

### Responsive Navbar

Mobile-responsive navigation with hamburger menu:

**Desktop:** Horizontal category links
**Mobile:** Collapsible menu with smooth transitions

### Add to Cart Modal

Beautiful animated success modal:

- Gradient header with animated check icon
- Product preview with image and details
- Cart total summary
- Action buttons for checkout or continue shopping

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Features

1. **Create Feature Structure:**

   ```
   features/your-feature/
   ├── models/        # TypeScript types
   ├── services/      # API calls
   └── hooks/         # React hooks
   ```

2. **Create UI Components:**
   - Add to `components/ui/` for reusable components
   - Add to `components/composites/` for complex components

3. **Create Pages:**
   - Add to `app/your-page/` following App Router conventions

### Type-Safe Redux

```typescript
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store/store";

// Typed hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// Usage
const dispatch = useAppDispatch();
const cart = useAppSelector((state) => state.cart);
```

### API Integration with TanStack Query

```typescript
// features/products/hooks/index.ts
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: productsService.getAll,
  });
};

// In component
const { data: products, isLoading, error } = useProducts();
```

## 🎯 Key Implementation Details

### Responsive Design Patterns

- **Mobile-First CSS** - Base styles for mobile, enhanced with breakpoints
- **Fluid Typography** - Text scales with viewport
- **Flexible Grids** - CSS Grid and Flexbox for layouts
- **Proper Spacing** - Consistent padding/margins at all breakpoints

### Performance Optimizations

- **Image Optimization** - Next.js Image component with lazy loading
- **Code Splitting** - Automatic route-based code splitting
- **Query Caching** - TanStack Query with 5-minute stale time
- **Bundle Analysis** - Optimized bundle sizes

### Accessibility

- **Semantic HTML** - Proper use of ARIA attributes
- **Keyboard Navigation** - Full keyboard support
- **Screen Reader Support** - Proper labels and descriptions
- **Focus Management** - Logical focus flow

## 📝 Project Highlights

- ✅ Fully functional e-commerce platform
- ✅ Responsive design for all devices
- ✅ Modern React patterns (hooks, context, portals)
- ✅ Type-safe with strict TypeScript
- ✅ Clean architecture with feature-based organization
- ✅ Reusable component library
- ✅ Optimized for performance
- ✅ Production-ready build

## 🌐 API Integration

This project integrates with the FakeStore API:

- **Products:** `https://fakestoreapi.com/products`
- **Single Product:** `https://fakestoreapi.com/products/{id}`
- **Categories:** `https://fakestoreapi.com/products/categories`
- **Carts:** `https://fakestoreapi.com/carts`
- **Users:** `https://fakestoreapi.com/users`

## 🤝 Contributing

This is a demonstration project showcasing modern React/Next.js development practices. Feel free to customize and extend it for your needs!

## 📄 License

MIT

## 🙏 Acknowledgments

- **FakeStore API** - For providing the product data
- **Tailwind CSS** - For the utility-first CSS framework
- **Next.js** - For the React framework
- **TanStack Query** - For the data fetching library
- **Lucide** - For the beautiful icon set

---

Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS v4
