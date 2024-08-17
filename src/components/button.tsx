'use client';
import { IconType } from '@/icon/icons';
 import React from 'react';

export default function Button({
	iconType,
	setIconType,
	name,
}: {
	iconType: IconType;
	setIconType: (iconType: IconType) => void;
	name: IconType;
}) {
 	return (
		<button
			className={`px-4 py-2 bg-stone-300 text-black capitalize font-semibold ${
				iconType === name ? '!bg-blue-300' : ''
			}`}
			onClick={() => setIconType(name)}
		>
			{name}
		</button>
	);
}
