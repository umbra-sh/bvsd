import shadeLogo from '../assets/shade.svg'

export function Header() {
    return (
        <header class="navbar bg-neutral text-neutral-content rounded-lg mb-5">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabIndex={0} role="button" class="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Mobile Link 1</a>
                        </li>
                        <li>
                            <a>Mobile dropdown menu</a>
                            <ul class="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Mobile Link 1</a>
                        </li>
                    </ul>
                </div>
                <a class="btn btn-ghost text-xl font-bold"><img src={shadeLogo} alt="Solid logo" /> BVSD </a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li>
                        <a>Desktop Link 1</a>
                    </li>
                    <li>
                        <details>
                            <summary>Desktop Dropdown</summary>
                            <ul class="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a>Desktop Link 1</a>
                    </li>
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn">Button</a>
            </div>
        </header>
    );
}
