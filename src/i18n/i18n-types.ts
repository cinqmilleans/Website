// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'fr'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	section: {
		design: {
			/**
			 * design
			 */
			title: string
			/**
			 * Power meets beauty.
			 */
			hook: string
			/**
			 * Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs. And so much more.
			 */
			description: string
		}
		features: {
			/**
			 * features
			 */
			title: string
			/**
			 * It already does that.
			 */
			hook: string
			/**
			 * Cloud files integration? Tabs and multiple layouts? Rich file previews? Files has it covered with robust features you expect from a modern file manager.
			 */
			description: string
			cards: {
				cloud: {
					/**
					 * Seamless cloud integration
					 */
					title: string
					/**
					 * Integration with cloud services such as OneDrive, Google Drive, and iCloud allow you to manage your documents and photos in the cloud, right from the sidebar.
					 */
					description: string
				}
				preview: {
					/**
					 * File preview
					 */
					title: string
					/**
					 * Preview documents, photos, and more without opening them. Support for rich previews, syntax highlighting, markdown and video playback is all built in.
					 */
					description: string
				}
				tag: {
					/**
					 * Tagged Files & Folders
					 */
					title: string
					/**
					 * Quickly mark and organize your files and folders for later by assigning them colored and named tags for easy identification. You can even add your own custom tags!
					 */
					description: string
				}
				tabs: {
					/**
					 * Multitask with tabs
					 */
					title: string
					/**
					 * Avoid multiple windows and keep your desktop clutter-free. Files features a browser-like tabbing interface complete with keyboard shortcuts.
					 */
					description: string
				}
			}
		}
		themes: {
			/**
			 * themes
			 */
			title: string
			/**
			 * Distinctly personal.
			 */
			hook: string
			/**
			 * Have it your way. Files features a fully customizable user interface, right down to the colors and materials. Try custom themes that are built into Files or dive right into the docs and create your own.
			 */
			description: string
		}
	}
}

export type TranslationFunctions = {
	section: {
		design: {
			/**
			 * design
			 */
			title: () => LocalizedString
			/**
			 * Power meets beauty.
			 */
			hook: () => LocalizedString
			/**
			 * Explore a beautiful Windows-first design. Manage all your files with increased productivity. Work across multiple folders with tabs. And so much more.
			 */
			description: () => LocalizedString
		}
		features: {
			/**
			 * features
			 */
			title: () => LocalizedString
			/**
			 * It already does that.
			 */
			hook: () => LocalizedString
			/**
			 * Cloud files integration? Tabs and multiple layouts? Rich file previews? Files has it covered with robust features you expect from a modern file manager.
			 */
			description: () => LocalizedString
			cards: {
				cloud: {
					/**
					 * Seamless cloud integration
					 */
					title: () => LocalizedString
					/**
					 * Integration with cloud services such as OneDrive, Google Drive, and iCloud allow you to manage your documents and photos in the cloud, right from the sidebar.
					 */
					description: () => LocalizedString
				}
				preview: {
					/**
					 * File preview
					 */
					title: () => LocalizedString
					/**
					 * Preview documents, photos, and more without opening them. Support for rich previews, syntax highlighting, markdown and video playback is all built in.
					 */
					description: () => LocalizedString
				}
				tag: {
					/**
					 * Tagged Files & Folders
					 */
					title: () => LocalizedString
					/**
					 * Quickly mark and organize your files and folders for later by assigning them colored and named tags for easy identification. You can even add your own custom tags!
					 */
					description: () => LocalizedString
				}
				tabs: {
					/**
					 * Multitask with tabs
					 */
					title: () => LocalizedString
					/**
					 * Avoid multiple windows and keep your desktop clutter-free. Files features a browser-like tabbing interface complete with keyboard shortcuts.
					 */
					description: () => LocalizedString
				}
			}
		}
		themes: {
			/**
			 * themes
			 */
			title: () => LocalizedString
			/**
			 * Distinctly personal.
			 */
			hook: () => LocalizedString
			/**
			 * Have it your way. Files features a fully customizable user interface, right down to the colors and materials. Try custom themes that are built into Files or dive right into the docs and create your own.
			 */
			description: () => LocalizedString
		}
	}
}

export type Formatters = {}
