export default function Footer() {
    return (
      <div className="flex items-center md:flex-row flex-col gap-2 justify-between py-4 relative">
        <div>
         <img className="w-[110px] hidden dark:block" src="/logo/logo-dark.png" alt="logo" />
         <img className=" w-[110px] block dark:hidden" src="/logo/logo-light.png" alt="logo" />
         </div>
        <div className="text-base">Surge ©️ All rights reserved</div>
      </div>
    )
  }