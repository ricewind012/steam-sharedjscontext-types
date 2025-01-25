import type { FC, MutableRefObject, ReactNode } from "react";
import { findModuleExport } from "@steambrew/client";

/**
 * @note The absence of `steamURL` will turn it into a separator.
 */
export interface RootMenuItem {
	name: string;
	onClick?: () => void;
	/**
	 * @todo enum
	 */
	parentalFeature?: number;
	/**
	 * The Steam URL to use on click.
	 */
	steamURL?: string;
	visible?: boolean;
}

export interface RootMenuOptions {
	bCreateHidden?: boolean;
	bDisableMouseOverlay?: boolean;
	bForcePopup?: boolean;
	bGrowToElementWidth?: boolean;
	bNoFocusWhenShown?: boolean;
	bOverlapHorizontal?: boolean;
	bPreferPopLeft?: boolean;
	bRetainOnHide?: boolean;
	title?: string;
}

interface RootMenuButtonProps {
	bIsAnyMenuOpen?: boolean;
	/**
	 * Hides the menu popup when the mouse leaves the button.
	 */
	bSuperNavBehavior?: boolean;
	/**
	 * Root menu button class name.
	 */
	buttonClass?: string;
	children?: ReactNode;
	className?: string;
	disabledClass?: string;
	disabledItemClass?: string;
	menuContent?: ReactNode;
	menuItems: RootMenuItem[];
	menuOptions?: Partial<RootMenuOptions>;
	onClick?: () => void;
	onShow?: () => void;
	onHide?: () => void;
	/**
	 * @todo enum
	 */
	parentalFeature?: number;
	/**
	 * Menu items container class name.
	 */
	popupClass?: string;
	refPopupMenu?: MutableRefObject<any>;
	/**
	 * Popup internal name.
	 */
	title?: string;
}

export const RootMenuButton: FC<RootMenuButtonProps> = findModuleExport((m) =>
	m.toString().includes("bSuperNavBehavior"),
);
