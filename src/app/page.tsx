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
		<main className="container mx-auto my-10">
			<div className="mb-4 flex justify-between">
				<h1 className="mb-2 text-3xl font-bold">
					icons {' '}
					<Link href="https://keenthemes.com/keenicons" target="_blank" className='text-blue-500 underline'>
						[keenicons]
					</Link>
				</h1>
				<Link href="https://github.com/Abdur-Shobur/icons" target='_blank' className="text-blue-500 underline">
					How to use Next js
				</Link>
			</div>
			<div className="mb-4 flex gap-3">
				<Button iconType={iconType} name="duotone" setIconType={setIconType} />
				<Button iconType={iconType} name="outline" setIconType={setIconType} />
				<Button iconType={iconType} name="solid" setIconType={setIconType} />
			</div>
			<div>
				<input
					type="text"
					placeholder="Search icons..."
					value={searchTerm}
					onChange={handleSearchChange}
					style={{
						padding: '10px',
						marginBottom: '20px',
						width: '100%',
						boxSizing: 'border-box',
						fontSize: '16px',
					}}
					className="border border-gray-300 rounded-md"
				/>
			</div>
			<div className="grid grid-cols-12 gap-2">
				{filteredIcons.map(([iconName, count]) =>
					Array.from({ length: count }).map((_, index) => (
						<div
							key={`${iconName}-${index}`}
							onClick={() => handleIconClick(iconName)}
							className="text-center cursor-pointer inline-block border transition-all  hover:text-green-500 border-blue-400 p-2 rounded-md hover:bg-blue-50 shadow-lg"
						>
							<KTIcon
								iconName={iconName}
								className=" transition-all text-7xl "
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
