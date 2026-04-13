import { COMPANY } from "@/lib/constants/site";
import { getContent } from "@/lib/content/site";

export function SiteFooter() {
  const content = getContent();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-zinc-600 lg:px-8 dark:text-zinc-300">
        <p>
          {COMPANY.legalName} · {COMPANY.city} · {COMPANY.email}
        </p>
        <p>
          © {new Date().getFullYear()} {COMPANY.name}. {content.footer.rights}
        </p>
      </div>
    </footer>
  );
}
