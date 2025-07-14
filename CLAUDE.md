# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `pnpm run dev` - Runs Vite dev server in development mode
- **Build**: `pnpm run build` - TypeScript compilation + Vite production build
- **Type checking**: `pnpm run type-check` - Run TypeScript compiler for type checking
- **Linting**: `pnpm run lint` - ESLint with auto-fix
- **Preview**: `pnpm run preview` - Preview production build locally
- **Dead code analysis**: `pnpm run knip` - Find unused exports and dependencies

## Architecture Overview

This is a React admin dashboard built with modern tooling and a feature-based architecture:

### Tech Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite with TanStack Router plugin
- **Routing**: TanStack Router (file-based routing with type safety)
- **State Management**: Zustand for auth state, TanStack Query for server state
- **UI**: ShadcnUI components (Radix UI + TailwindCSS)
- **Styling**: TailwindCSS v4 with CSS-in-JS support
- **HTTP Client**: Axios with custom interceptors and retry logic
- **Auth**: Custom auth with Zustand store + cookie persistence

### Project Structure

**File-based Routing**: Routes are defined in `src/routes/` following TanStack Router conventions:
- `__root.tsx` - Root layout with global providers
- `_authenticated/` - Protected routes requiring authentication
- `(auth)/` - Authentication pages (sign-in, sign-up, etc.)
- `(errors)/` - Error pages (404, 500, etc.)

**Feature Architecture**: Features are organized in `src/features/` with each containing:
- `components/` - Feature-specific UI components
- `data/` - Mock data, schemas, types
- `context/` - React contexts for state management
- `index.tsx` - Main feature export

**Key Features**:
- `auth/` - Authentication forms and layouts
- `dashboard/` - Main dashboard with overview components
- `tasks/` - Task management with data tables
- `users/` - User management interface
- `settings/` - Application settings pages

### API Architecture

HTTP layer in `src/api/`:
- `http/axios/` - Axios configuration with interceptors
- `useAuthApi.ts` - Authentication API hooks
- Request/response interceptors handle auth tokens and error states

### State Management

- **Auth State**: Zustand store (`src/stores/authStore.ts`) with cookie persistence
- **Server State**: TanStack Query for API data fetching and caching
- **UI State**: React Context for theme, search, and font preferences

### Path Alias

Uses `@/` alias pointing to `src/` directory for clean imports.

### Key Dependencies

- **UI Components**: All in `src/components/ui/` following ShadcnUI patterns
- **Layout**: App sidebar and authenticated layout in `src/components/layout/`
- **Icons**: Tabler Icons and Lucide React
- **Forms**: React Hook Form with Zod validation
- **Data Tables**: TanStack Table with custom implementations

The codebase follows a clear separation between features, maintains type safety throughout, and uses modern React patterns with proper error boundaries and loading states.