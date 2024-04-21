import "@/app/globals.css";
import React, { Children } from 'react'

export default function Authlayout({children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html>
			<body>{children}</body>
		</html>
	); 
  
}
