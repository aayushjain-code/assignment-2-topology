# Architecture Documentation

## Overview

This project implements a React-based topology visualization application following industry-level standards and SOLID principles with a comprehensive styling system.

## SOLID Principles Implementation

### 1. Single Responsibility Principle (SRP)

- **Components**: Each component has a single, well-defined responsibility

  - `DraggableGoogleNode`: Renders and handles drag for Google node
  - `DraggableStateCard`: Renders and handles drag for state cards
  - `SiteHex`: Renders individual site hexagons
  - `EdgeComponent`: Renders connections between nodes

- **Hooks**: `useDrag` handles only drag functionality
- **Utils**: `nodeUtils` contains only node-related operations
- **Styling**: Separated into theme, dimensions, and styled components

### 2. Open/Closed Principle (OCP)

- Components are open for extension through props and composition
- New node types can be added without modifying existing components
- Styling can be extended through the theme system
- Drag behavior can be customized through the `useDrag` hook options

### 3. Liskov Substitution Principle (LSP)

- All components implement consistent interfaces
- `Node` type ensures all nodes can be used interchangeably
- Drag handlers follow consistent signatures

### 4. Interface Segregation Principle (ISP)

- Props interfaces are small and focused
- `DraggableGoogleNodeProps` only includes what's needed for Google nodes
- `DraggableStateCardProps` only includes state-specific props
- `UseDragOptions` provides optional configuration

### 5. Dependency Inversion Principle (DIP)

- Components depend on abstractions (interfaces) not concrete implementations
- Data flows through props and callbacks
- Styling is injected through the theme system

## DRY (Don't Repeat Yourself) Implementation

### 1. Reusable Styled Components

- `StyledSvgCard`: Eliminates repeated card rendering code
- `StyledSvgText`: Centralizes text styling and positioning
- `StyledEdge`: Reusable edge rendering
- `StyledCiscoTag`: Pre-built Cisco tag component
- `StyledContainer` & `StyledCanvas`: Layout components

### 2. Custom Hooks

- `useDrag`: Eliminates repeated drag logic across components

### 3. Centralized Styling System

- `theme.ts`: Single source of truth for colors, typography, and styling
- `dimensions.ts`: All measurements and layout constants
- `styledComponents.ts`: Reusable styled components
- `initialData.ts`: Centralized data configuration
- `nodeUtils.ts`: Reusable node operations

## Project Structure

```
src/
├── components/
│   ├── common/           # Reusable UI components
│   │   ├── ErrorBoundary/
│   │   ├── GoogleLogo/
│   │   ├── SiteHex/
│   │   └── Edge/
│   └── nodes/            # Node-specific components
│       ├── DraggableGoogleNode/
│       ├── DraggableStateCard/
│       ├── CaliforniaSites/
│       └── DraggableChild/
├── styles/               # Comprehensive styling system
│   ├── theme.ts         # Colors, typography, spacing, shadows
│   ├── dimensions.ts    # Layout measurements and constants
│   ├── styledComponents.ts # Reusable styled components
│   └── index.ts         # Styling exports
├── data/
│   └── initialData.ts    # Data configuration
├── hooks/
│   └── useDrag.ts        # Custom drag hook
├── types/
│   ├── node.ts          # Node type definitions
│   └── site.ts          # Site data types
├── utils/
│   └── nodeUtils.ts     # Node utility functions
├── App.tsx              # Main application component
└── index.tsx            # Application entry point
```

## Styling System Architecture

### 1. Theme System (`theme.ts`)

- **Colors**: Centralized color palette with semantic naming
- **Typography**: Font sizes, families, weights, and spacing
- **Spacing**: Consistent spacing scale (xs, sm, md, lg, xl, xxl)
- **Border Radius**: Standardized border radius values
- **Shadows**: Predefined shadow effects

### 2. Dimensions System (`dimensions.ts`)

- **Card Dimensions**: All card sizes and measurements
- **Canvas Dimensions**: Main canvas size
- **Component Dimensions**: Specific component measurements
- **Spacing**: Layout-specific spacing values

### 3. Styled Components (`styledComponents.ts`)

- **SVG Components**: Styled SVG elements with consistent theming
- **Layout Components**: Container and canvas components
- **Composite Components**: Complex components like Cisco tags

### 4. Benefits of This Approach

- **Consistency**: All styling follows the same design system
- **Maintainability**: Changes to theme affect entire application
- **Reusability**: Styled components can be used across the app
- **Type Safety**: Full TypeScript support for styling
- **Performance**: Optimized styled components with React.memo

## Performance Optimizations

### 1. React.memo

- `SiteHex` component is memoized to prevent unnecessary re-renders
- Components only re-render when their specific props change

### 2. Custom Hooks

- `useDrag` uses `useCallback` to prevent unnecessary re-creation of drag handlers
- Dependencies are properly managed to avoid infinite loops

### 3. Efficient State Updates

- `updateNodePosition` utility ensures immutable state updates
- Node filtering utilities prevent unnecessary array operations

### 4. Styled Components

- Pre-built styled components reduce runtime styling calculations
- Theme-based styling ensures consistent performance

## Error Handling

### 1. Error Boundary

- `ErrorBoundary` component catches and handles React errors gracefully
- Provides fallback UI when errors occur
- Logs errors for debugging

### 2. Type Safety

- TypeScript interfaces ensure type safety across the application
- Props validation prevents runtime errors
- Styling system is fully typed

## Maintainability Features

### 1. Consistent Naming

- Components follow PascalCase naming convention
- Files follow kebab-case naming convention
- Constants use UPPER_SNAKE_CASE
- Styled components use Styled prefix

### 2. Modular Structure

- Each component has its own folder with index.ts for clean imports
- Related functionality is grouped together
- Clear separation of concerns
- Styling is completely separated from logic

### 3. Documentation

- Components are self-documenting through clear naming
- TypeScript interfaces serve as documentation
- Theme and dimensions are well-organized and documented

## Testing Considerations

### 1. Component Isolation

- Components are easily testable due to clear interfaces
- Props are well-defined and typed
- Side effects are isolated in custom hooks
- Styled components can be tested independently

### 2. Mockable Dependencies

- External dependencies (D3) are abstracted through custom hooks
- Data is injected through props, making testing easier
- Styling system can be mocked for testing

## Scalability

### 1. Extensible Architecture

- New node types can be added without modifying existing code
- Styling system can accommodate new themes and components
- Data structure can be extended for new features
- Styled components can be extended or new ones added

### 2. Performance Scaling

- Components are optimized for large datasets
- Drag operations are efficient and don't cause performance issues
- Memory usage is optimized through proper cleanup
- Styled components provide consistent performance

### 3. Theme Scaling

- New color schemes can be added easily
- Typography scales can be extended
- Component variants can be created through theme extensions
- Dark mode and other themes can be implemented

This architecture provides a solid foundation for a maintainable, scalable, and performant React application that follows industry best practices, SOLID principles, and modern styling patterns.
 