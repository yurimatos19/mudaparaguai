"use client";

import React from "react";
import Image from "next/image";

interface FlagProps {
    className?: string;
    width?: number;
    height?: number;
}

export function BrazilFlag({ className, width = 24, height = 16 }: FlagProps): React.ReactElement {
    return (
        <div 
            className={className} 
            style={{ 
                width, 
                height, 
                position: 'relative', 
                borderRadius: "3px", 
                overflow: "hidden", 
                boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)" 
            }}
        >
            <Image
                src="/brazil.svg"
                alt="Bandeira do Brasil"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
    );
}

export function ParaguayFlag({ className, width = 24, height = 16 }: FlagProps): React.ReactElement {
    return (
        <div 
            className={className} 
            style={{ 
                width, 
                height, 
                position: 'relative', 
                borderRadius: "3px", 
                overflow: "hidden", 
                boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)" 
            }}
        >
            <Image
                src="/paraguay.svg"
                alt="Bandeira do Paraguai"
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
    );
}
