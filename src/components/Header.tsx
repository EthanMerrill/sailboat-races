import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,

} from "@/components/ui/navigation-menu"


export default function Header() {
  return (
    <header className="bg-white shadow" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/"><h1 className="text-2xl font-bold">Where to Sail</h1></a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>States</NavigationMenuTrigger>
                <NavigationMenuContent>
                  { }
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Cities</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Link Two</NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Link tree</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Link Two</NavigationMenuLink>


            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
}
