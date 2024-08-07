import "@testing-library/jest-dom/vitest";

// Mock the ResizeObserver
const ResizeObserverMock = vi.fn(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
}));

// Mock the useRouter
vi.mock("next/navigation", () => ({
	useRouter: vi.fn(),
}));

// Stub the global ResizeObserver
vi.stubGlobal("ResizeObserver", ResizeObserverMock);
