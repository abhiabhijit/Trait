'use client';

import { useEffect, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';

import { Button, buttonVariants } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import { LogoIcon } from './Icons';
import { User } from '@supabase/supabase-js';
import { createApiClient } from '@/utils/supabase/api';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { useSearchParams } from "next/navigation";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: '/#features',
    label: 'Features'
  },
  {
    href: '/#testimonials',
    label: 'Testimonials'
  },
  {
    href: '/#pricing',
    label: 'Pricing'
  },
  {
    href: '/#faq',
    label: 'FAQ'
  }
];

export const Navbar = ({ user }: { user: User | null }) => {
  const router = useRouter();
  const { toast } = useToast();
  const api = createApiClient(createClient());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const handleAuth = async () => {
    if (user) {
      return router.push('/report');
    }
    return router.push('/auth');
  };

   useEffect(() => {
    const handleAuthSuccess = async (authData: any, localhost_url: string) => {
      const encodedAuthData = encodeURIComponent(JSON.stringify(authData));
      const url = `${localhost_url}?secrets=${encodedAuthData}`;
      try {
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error making GET request:', error);
      }
    };
    
     const handleCliAuth = async (localhost_url: string) => {
       try {
         const response = {'hey': "hey"};
         await handleAuthSuccess(response, localhost_url);
       } catch (error) {
         console.error('Error fetching user data:', error);
       }
     };

     const cli = searchParams.get('cli') || sessionStorage.getItem('cli');
    const localhost_url = searchParams.get('localhost_url') || sessionStorage.getItem('localhost_url');
    console.log(localhost_url);
    console.log(cli);
    
    if (cli && localhost_url) {
      handleCliAuth(localhost_url);
    }
   }, []);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <LogoIcon />
              ShadcnUI/React
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2" asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>

              <SheetContent side={'left'}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: 'ghost' })}
                    >
                      {label}
                    </a>
                  ))}
                  <Button
                    variant="secondary"
                    onClick={handleAuth}
                    className={`w-[110px] border`}
                  >
                    {user ? 'Account' : 'Sign In'}
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: 'ghost'
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <Button
              onClick={handleAuth}
              className={`border`}
              variant="secondary"
            >
              {user ? 'View Reports' : 'Sign In'}
            </Button>
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
