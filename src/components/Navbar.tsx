import { onMount, createEffect, createSignal, type Component } from "solid-js";
import { useScroll, useDark } from "solidjs-use";
import ToggleToc from "@components/ToggleToc";

export const Navbar: Component<{
  activePage?: string;
  hasToc?: boolean;
}> = (props) => {
  const isDark = false
  const setDark = false
  const [isFixed, setIsFixed] = createSignal(false);
  const [isVisible, setIsVisible] = createSignal(false);

  let navbar: HTMLElement | undefined = undefined;

  onMount(() => {
    const { y, directions } = useScroll(document);

    createEffect(() => {
      if (directions.top) {
        // scrolling up
        if (y() > 0 && isFixed()) setIsVisible(true);
        else {
          setIsVisible(false);
          setIsFixed(false);
        }
      } else if (directions.bottom) {
        // scrolling down
        setIsVisible(false);
        if (navbar && y() > navbar.offsetHeight) setIsFixed(true);
      }
    });
  });

  return (
    <header
      ref={navbar}
      class={`z-30 w-full h-16 hstack justify-between bg-c/80 backdrop-blur-sm font-ui px-4 md:px-5 ${
        isFixed() && "fixed -top-16 left-0 transition duration-300 border-b border-c/30"
      } ${isVisible() && "translate-y-full shadow-sm"} ${
        !isFixed() && !isVisible() && "absolute top-0 left-0"
      }`}
    >
      <a font-medium text="c-light hover:c-dark" href="/" class="transition-all duration-200">
        <span text-lg letter-spacing="-0.02em">Home</span>
        <div i-fa6-solid:angle-right class="prompt inline-block" />
      </a>

      <nav hstack space-x-5>
        <a nav-item href="/projects" title="Projects">
          <div i-ph:flask-duotone class="md:hidden" />  {/* Assuming 'i-ph:flask-duotone' is the icon for experiments */}
          <span class={`${props.activePage === "projects" ? 'text-c-dark font-medium' : ''}`}>
            Projects
          </span>
        </a>

        <a nav-item href="/writings" title="Writings">
          <div i-ph:pencil-duotone class="md:hidden" />  {/* Assuming 'i-ph:pencil-duotone' is the icon for writing */}
          <span class={`lt-md:hidden ${props.activePage === "writings" ? 'text-c-dark font-medium' : ''}`}>
            Writings
          </span>
        </a>
        
        {/* <a nav-item href="/search" title="Search">
          <span i-uil:search />
        </a> */}

        {/* <button nav-item title="Toggle dark" onClick={() => setDark(!isDark())}>
          <div i="carbon-sun dark:carbon-moon" />
        </button> */}

        {props.hasToc && <ToggleToc />}
      </nav>
    </header>
  );
};

export default Navbar;
