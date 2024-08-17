## icons library [keenicons](https://keenthemes.com/keenicons)

**Icon Integration Guide for Next.js/React**

## Installation Steps

### 1. Copy Assets and Icon Folder

Copy the `assets` and `icon` folders into your project directory. These should contain the necessary CSS files and font/icon resources. from this github

### 2. Import Global Styles

In your `global.css` file, import the icon styles:

```css
@import '../assets/keenicons/duotone/style.css';
@import '../assets/keenicons/outline/style.css';
@import '../assets/keenicons/solid/style.css';

#__next {
	display: contents;
}
```

### 3. Use the <KTIcon> Component

```tsx
<KTIcon iconName="abstract-25" iconType="outline" />
```

### Icon Type is

```ts
type Props = {
	className?: string;
	iconType?: 'duotone' | 'solid' | 'outline';
	iconName: string;
};
```

**live Link ** [https://keenicons.netlify.app/](https://keenicons.netlify.app/)

### Use in HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Use Icon</title>
		<link rel="stylesheet" href="./assets/keenicons/duotone/style.css" />
		<link rel="stylesheet" href="./assets/keenicons/outline/style.css" />
		<link rel="stylesheet" href="./assets/keenicons/solid/style.css" />
	</head>
	<body>
		<div style="font-size: 30px">
			<span class="ki-duotone ki-abstract-1"
				><span class="path1"></span><span class="path2"></span
			></span>
		</div>
		<div style="font-size: 30px" class="clearfix bshadow0 pbs">
			<span class="ki-outline ki-abstract-1"></span>
		</div>
		<div style="font-size: 30px" class="clearfix bshadow0 pbs">
			<span class="ki-solid ki-abstract-1"></span>
		</div>
	</body>
</html>
```
