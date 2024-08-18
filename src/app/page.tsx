'use client';
import { useState } from 'react';
import Link from 'next/link';
import icons, { IconType } from '@/icon/icons';
import toast, { Toaster } from 'react-hot-toast';
import Button from '@/components/button';
import { KTIcon } from '@/icon';

export default function Home() {
	const [searchTerm, setSearchTerm] = useState('');
	const [iconType, setIconType] = useState<IconType>('duotone');
	const [selectedColor, setSelectedColor] = useState('#000000'); // Default color
	const handleColorChange = (e) => {
		setSelectedColor(e.target.value);
	};
	const handleIconClick = (iconName: string) => {
		navigator.clipboard
			.writeText(iconName)
			.then(() => {
				toast.success(
					<span>
						Copied <b> {iconName} </b> to clipboard!
					</span>
				);
			})
			.catch((err) => {
				toast.error('Failed to copy: ', err);
			});
	};

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value.toLowerCase());
	};

	const filteredIcons = Object.entries(icons).filter(([iconName]) =>
		iconName.toLowerCase().includes(searchTerm)
	);
	return (
		<main className="container mx-auto my-10 px-4">
			<div className="mb-4 flex justify-between">
				<h1 className="mb-2 text-xl md:text-3xl font-bold">
					icons{' '}
					<Link
						href="https://keenthemes.com/keenicons"
						target="_blank"
						className="text-blue-500 underline text-sm md:text-base"
					>
						[keenicons]
					</Link>
				</h1>
				<Link
					href="https://github.com/Abdur-Shobur/icons"
					target="_blank"
					className="text-blue-500 underline text-sm md:text-base"
				>
					How to use Next js
				</Link>
			</div>
			<div className="mb-4 flex gap-3">
				<Button iconType={iconType} name="duotone" setIconType={setIconType} />
				<Button iconType={iconType} name="outline" setIconType={setIconType} />
				<Button iconType={iconType} name="solid" setIconType={setIconType} />
			</div>

			<div className="mb-4">
				<label className="mr-2">Select Icon Color:</label>
				<input
					type="color"
					value={selectedColor}
					onChange={handleColorChange}
					className="cursor-pointer"
				/>
			</div>
			<div>
				<input
					type="text"
					placeholder="Search icons..."
					value={searchTerm}
					onChange={handleSearchChange}
					style={{
						marginBottom: '20px',
						width: '100%',
						boxSizing: 'border-box',
					}}
					className="border border-gray-300 rounded-md shadow text-base px-3 py-1"
				/>
			</div>
			<div className="grid 2xl:grid-cols-12 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-2">
				{filteredIcons.map(([iconName, count]) =>
					Array.from({ length: count }).map((_, index) => (
						<div
							key={`${iconName}-${index}`}
							onClick={() => handleIconClick(iconName)}
							className="text-center cursor-pointer inline-block border transition-all   hover:text-green-500 border-blue-400 p-2 rounded-md hover:bg-blue-50 shadow-lg"
							style={{ color: selectedColor }}
						>
							<KTIcon
								iconName={iconName}
								className=" transition-all 2xl:text-7xl text-5xl"
								iconType={iconType}
							/>
							<p className="text-xs">{iconName}</p>
						</div>
					))
				)}
			</div>

			{filteredIcons.length === 0 && (
				<p className="text-red-500">No icons found.</p>
			)}
			<Toaster />
		</main>
	);
}
