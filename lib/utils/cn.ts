// =====================================================
// BLOODYLP HOMEPAGE
//
// Class Name Utility
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}