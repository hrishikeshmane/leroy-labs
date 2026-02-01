import { FirstBentoAnimation } from "@/components/first-bento-animation";
import { FourthBentoAnimation } from "@/components/fourth-bento-animation";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";
import {
  HeroConfig,
  CompanyLogo,
  FeatureSectionConfig,
  BentoSectionConfig,
  GrowthSectionConfig,
  QuoteConfig,
  PricingConfig,
  Testimonial,
  FAQSectionConfig,
  CTASectionConfig,
  Benefit,
} from "@/lib/types";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "p-1 py-0.5 font-medium dark:font-semibold text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
};

export const BLUR_FADE_DELAY = 0.15;

export const heroConfig: HeroConfig = {
  badgeIcon: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="dark:fill-white fill-[#364153]"
    >
      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
      <path d="M2 17L12 22L22 17" />
      <path d="M2 12L12 17L22 12" />
    </svg>
  ),
  badge: "Forward-Deployed Engineering",
  title: "We Build AI That Builds Your Business",
  description:
    "Elite engineers and researchers who embed with your team to ship AI-native products and automate complex workflows. Not consultants. Builders.",
  cta: {
    primary: {
      text: "Book a Call",
      href: "/contact",
    },
    secondary: {
      text: "Our Work",
      href: "/case-studies",
    },
  },
};

export const companyLogos: CompanyLogo[] = [
  {
    id: 1,
    name: "OpenAI",
    logo: (
      <svg
        width="110"
        height="31"
        viewBox="0 0 110 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-white fill-black"
      >
        <path d="M34.5469 14.5155C34.5469 19.4338 37.7054 22.8631 42.0822 22.8631C46.4591 22.8631 49.6176 19.4338 49.6176 14.5155C49.6176 9.59721 46.4591 6.16797 42.0822 6.16797C37.7054 6.16797 34.5469 9.59721 34.5469 14.5155ZM46.7298 14.5155C46.7298 18.035 44.8121 20.3137 42.0822 20.3137C39.3524 20.3137 37.4347 18.035 37.4347 14.5155C37.4347 10.996 39.3524 8.71736 42.0822 8.71736C44.8121 8.71736 46.7298 10.996 46.7298 14.5155Z" />
        <path d="M57.7468 22.8652C61.0633 22.8652 62.9584 20.0676 62.9584 16.706C62.9584 13.3444 61.0633 10.5469 57.7468 10.5469C56.2127 10.5469 55.0846 11.156 54.3401 12.0359V10.7725H51.6328V26.678H54.3401V21.3761C55.0846 22.256 56.2127 22.8652 57.7468 22.8652ZM54.2724 16.3676C54.2724 14.1341 55.5359 12.9158 57.2054 12.9158C59.1682 12.9158 60.2285 14.4499 60.2285 16.706C60.2285 18.9621 59.1682 20.4963 57.2054 20.4963C55.5359 20.4963 54.2724 19.2554 54.2724 17.067V16.3676Z" />
        <path d="M70.2843 22.8652C72.6532 22.8652 74.5258 21.6243 75.3605 19.5487L73.0367 18.6688C72.6758 19.8871 71.6154 20.5639 70.2843 20.5639C68.5471 20.5639 67.3288 19.3231 67.1258 17.2926H75.4282V16.3902C75.4282 13.1414 73.6008 10.5469 70.1715 10.5469C66.7422 10.5469 64.5312 13.2316 64.5312 16.706C64.5312 20.3609 66.9002 22.8652 70.2843 22.8652ZM70.1489 12.8255C71.8636 12.8255 72.6758 13.9536 72.6983 15.2621H67.2611C67.6672 13.6603 68.7501 12.8255 70.1489 12.8255Z" />
        <path d="M77.4609 22.617H80.1683V15.6682C80.1683 13.9761 81.4091 13.0737 82.6274 13.0737C84.1164 13.0737 84.703 14.1341 84.703 15.6005V22.617H87.4103V14.8109C87.4103 12.2615 85.9213 10.5469 83.4396 10.5469C81.9054 10.5469 80.8451 11.2463 80.1683 12.0359V10.7725H77.4609V22.617Z" />
        <path d="M95.3397 6.41797L89.2031 22.6167H92.0684L93.4446 18.9167H100.438L101.837 22.6167H104.748L98.611 6.41797H95.3397ZM96.919 9.62163L99.4909 16.3899H94.3921L96.919 9.62163Z" />
        <path d="M109.396 6.46484H106.508V22.6636H109.396V6.46484Z" />
        <path d="M27.9278 12.3665C28.6102 10.3182 28.3752 8.07433 27.2838 6.21115C25.6425 3.35343 22.343 1.88321 19.1205 2.57508C17.687 0.960086 15.6273 0.0416664 13.4681 0.054827C10.1742 0.0473067 7.25158 2.16804 6.2382 5.30213C4.12219 5.73551 2.29568 7.06002 1.22685 8.93727C-0.426682 11.7875 -0.0497272 15.3803 2.15937 17.8244C1.4769 19.8728 1.71191 22.1166 2.8033 23.9798C4.4446 26.8375 7.74416 28.3078 10.9666 27.6159C12.3992 29.2309 14.4598 30.1494 16.6191 30.1352C19.9149 30.1437 22.8384 28.021 23.8518 24.8841C25.9678 24.4508 27.7943 23.1263 28.8631 21.249C30.5148 18.3988 30.137 14.8088 27.9287 12.3646L27.9278 12.3665ZM16.621 28.1696C15.3021 28.1714 14.0246 27.7099 13.0121 26.8648C13.0582 26.8403 13.1381 26.7962 13.1898 26.7642L19.1797 23.3049C19.4862 23.131 19.6742 22.8048 19.6723 22.4522V14.0078L22.2038 15.4696C22.2311 15.4828 22.249 15.5091 22.2527 15.5392V22.5321C22.249 25.6418 19.7306 28.163 16.621 28.1696ZM4.50945 22.9965C3.84863 21.8553 3.61081 20.5176 3.83735 19.2194C3.88154 19.2457 3.95954 19.2937 4.01501 19.3257L10.0049 22.785C10.3086 22.9627 10.6846 22.9627 10.9892 22.785L18.3018 18.5624V21.4859C18.3036 21.5159 18.2895 21.5451 18.266 21.5639L12.2112 25.0599C9.51423 26.6129 6.06995 25.6897 4.51042 22.9965H4.50945ZM2.93302 9.9215C3.59104 8.77841 4.62981 7.90416 5.8669 7.45014C5.8669 7.50182 5.86408 7.59303 5.86408 7.65695V14.5766C5.86218 14.9281 6.05019 15.2543 6.35572 15.4282L13.6683 19.65L11.1368 21.1117C11.1114 21.1287 11.0794 21.1315 11.0512 21.1193L4.99548 17.6204C2.30413 16.0618 1.38101 12.6185 2.93208 9.92243L2.93302 9.9215ZM23.7324 14.7618L16.4198 10.5391L18.9513 9.07829C18.9767 9.06136 19.0087 9.05853 19.0369 9.07077L25.0926 12.5668C27.7887 14.1244 28.7127 17.5734 27.155 20.2695C26.4961 21.4107 25.4583 22.2849 24.2221 22.7399V15.6134C24.2249 15.2619 24.0379 14.9366 23.7333 14.7618H23.7324ZM26.2517 10.9697C26.2075 10.9424 26.1295 10.8954 26.074 10.8634L20.0841 7.40406C19.7804 7.2264 19.4044 7.2264 19.0998 7.40406L11.7873 11.6267V8.70321C11.7854 8.67313 11.7995 8.64398 11.823 8.62518L17.8778 5.13199C20.5748 3.57621 24.0228 4.50217 25.5777 7.20008C26.2347 8.33941 26.4726 9.67333 26.2498 10.9697H26.2517ZM10.411 16.1803L7.87856 14.7185C7.85131 14.7054 7.83347 14.679 7.82971 14.649V7.65599C7.83157 4.54257 10.3575 2.01951 13.4709 2.02139C14.7879 2.02139 16.0626 2.48389 17.075 3.32618C17.0289 3.3506 16.95 3.39479 16.8973 3.42677L10.9074 6.88612C10.6009 7.06002 10.4129 7.38526 10.4148 7.73778L10.411 16.1784V16.1803ZM11.7863 13.2154L15.0436 11.3344L18.3008 13.2145V16.9756L15.0436 18.8556L11.7863 16.9756V13.2154Z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Anthropic",
    logo: (
      <svg
        width="113"
        height="25"
        viewBox="0 0 113 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-white fill-black"
      >
        <path d="M0.75 2.69908C0.75 1.48458 1.73458 0.5 2.94908 0.5H11.551C12.7655 0.5 13.75 1.48458 13.75 2.69908V4.4005C13.75 5.00775 13.2577 5.50004 12.6505 5.50004H1.84954C1.24229 5.50004 0.75 5.00775 0.75 4.4005V2.69908Z" />
        <path d="M0.75 9.59954C0.75 8.99224 1.24229 8.5 1.84954 8.5H22.551C23.7655 8.5 24.7501 9.48453 24.7501 10.6991V16.4005C24.7501 17.0077 24.2578 17.5 23.6506 17.5H2.94908C1.73458 17.5 0.75 16.5154 0.75 15.3009V9.59954Z" />
        <path d="M11.75 21.5995C11.75 20.9923 12.2423 20.5 12.8495 20.5H23.6505C24.2577 20.5 24.75 20.9923 24.75 21.5995V22.3009C24.75 23.5154 23.7654 24.5 22.5509 24.5H13.9491C12.7346 24.5 11.75 23.5154 11.75 22.3009V21.5995Z" />
        <path d="M38.3455 15.241H40.6572L44.9499 22.2582H50.2059L45.4452 14.7456C48.0872 13.8375 49.628 11.8012 49.628 8.85671C49.628 4.72899 46.7389 2.5 42.0881 2.5H33.75V22.2582H38.3455V15.241ZM38.3455 11.4985V6.38009H41.8404C44.0144 6.38009 45.115 7.31571 45.115 8.93927C45.115 10.5353 44.0144 11.4985 41.8404 11.4985H38.3455Z" />
        <path d="M58.113 22.5607C61.0026 22.5607 63.6446 21.1023 64.7178 18.3229L61.0305 17.1396C60.6177 18.4055 59.5444 19.0659 58.1682 19.0659C56.4896 19.0659 55.3064 17.9377 55.0036 15.9563H64.8278V14.8006C64.8278 10.7002 62.4335 7.45312 58.0309 7.45312C53.8477 7.45312 50.7656 10.7002 50.7656 14.9932C50.7656 19.5062 53.7378 22.5607 58.113 22.5607ZM57.9757 10.8655C59.5991 10.8655 60.4525 11.9662 60.4799 13.2595H55.1413C55.5815 11.6635 56.6274 10.8655 57.9757 10.8655Z" />
        <path d="M67.3281 18.378C67.3281 21.35 68.8967 22.3957 72.0335 22.3957C73.0794 22.3957 73.9051 22.3133 74.6755 22.2031V18.5982C74.1801 18.6532 73.9324 18.6807 73.4097 18.6807C72.309 18.6807 71.6759 18.4606 71.6759 17.2498V11.3884H74.5103V7.75595H71.6759V3.73828H67.3281V7.75595H65.4844V11.3884H67.3281V18.378Z" />
        <path d="M90.4203 15.0207C90.4203 10.5077 87.4212 7.45312 83.1555 7.45312C78.8628 7.45312 75.8906 10.5077 75.8906 15.0207C75.8906 19.5337 78.8628 22.5607 83.1555 22.5607C87.4212 22.5607 90.4203 19.5337 90.4203 15.0207ZM80.2663 15.0207C80.2663 12.489 81.3943 11.0581 83.1555 11.0581C84.9171 11.0581 86.0451 12.489 86.0451 15.0207C86.0451 17.5524 84.9171 18.9833 83.1555 18.9833C81.3943 18.9833 80.2663 17.5524 80.2663 15.0207Z" />
        <path d="M106.28 15.0207C106.28 10.5077 103.281 7.45312 99.0148 7.45312C94.7222 7.45312 91.75 10.5077 91.75 15.0207C91.75 19.5337 94.7222 22.5607 99.0148 22.5607C103.281 22.5607 106.28 19.5337 106.28 15.0207ZM96.1257 15.0207C96.1257 12.489 97.2537 11.0581 99.0148 11.0581C100.776 11.0581 101.904 12.489 101.904 15.0207C101.904 17.5524 100.776 18.9833 99.0148 18.9833C97.2537 18.9833 96.1257 17.5524 96.1257 15.0207Z" />
        <path d="M112.747 2.5H108.344V22.2582H112.747V2.5Z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Stripe",
    logo: (
      <svg
        width="73"
        height="31"
        viewBox="0 0 73 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-white fill-black"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72.2313 15.5944C72.2313 10.4676 69.7478 6.4222 65.0013 6.4222C60.2348 6.4222 57.3508 10.4676 57.3508 15.5543C57.3508 21.5824 60.7558 24.6264 65.6423 24.6264C68.0253 24.6264 69.8278 24.0857 71.1898 23.3247V19.3194C69.8278 20.0003 68.2658 20.4209 66.2833 20.4209C64.3403 20.4209 62.6183 19.74 62.3978 17.3768H72.1913C72.1913 17.1165 72.2313 16.0751 72.2313 15.5944ZM62.3378 13.6919C62.3378 11.4289 63.7198 10.4876 64.9813 10.4876C66.2028 10.4876 67.5048 11.4289 67.5048 13.6919H62.3378ZM49.6203 6.4222C47.6578 6.4222 46.3958 7.3434 45.6948 7.98425L45.4348 6.7426H41.0288V30.0938L46.0353 29.0323L46.0553 23.3648C46.7763 23.8855 47.8378 24.6264 49.6003 24.6264C53.1853 24.6264 56.4498 21.7426 56.4498 15.3941C56.4298 9.5864 53.1253 6.4222 49.6203 6.4222ZM48.4188 20.2206C47.2373 20.2206 46.5363 19.8001 46.0553 19.2794L46.0353 11.8494C46.5563 11.2687 47.2773 10.8681 48.4188 10.8681C50.2413 10.8681 51.5028 12.9108 51.5028 15.5343C51.5028 18.2179 50.2613 20.2206 48.4188 20.2206ZM34.1393 5.2406L39.1663 4.15915V0.09375L34.1393 1.15515V5.2406ZM34.1393 6.76265H39.1663V24.286H34.1393V6.76265ZM28.7518 8.2446L28.4313 6.76265H24.1053V24.286H29.1123V12.4102C30.2938 10.8681 32.2968 11.1485 32.9178 11.3688V6.76265C32.2768 6.5223 29.9333 6.08175 28.7518 8.2446ZM18.7383 2.41685L13.8513 3.45825L13.8313 19.4996C13.8313 22.4636 16.0543 24.6465 19.0188 24.6465C20.6608 24.6465 21.8623 24.3461 22.5233 23.9856V19.9202C21.8823 20.1805 18.7183 21.1017 18.7183 18.1378V11.0284H22.5233V6.76265H18.7183L18.7383 2.41685ZM5.19971 11.8494C5.19971 11.0684 5.84061 10.768 6.90206 10.768C8.42411 10.768 10.3468 11.2286 11.8688 12.0497V7.3434C10.2066 6.68255 8.56431 6.4222 6.90206 6.4222C2.83651 6.4222 0.132812 8.545 0.132812 12.0898C0.132812 17.6171 7.74321 16.736 7.74321 19.1191C7.74321 20.0403 6.94211 20.3407 5.82056 20.3407C4.15831 20.3407 2.03541 19.6598 0.353111 18.7386V23.505C2.21566 24.3061 4.09821 24.6465 5.82056 24.6465C9.98626 24.6465 12.8503 22.5837 12.8503 18.9989C12.8303 13.031 5.19971 14.0924 5.19971 11.8494Z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Vercel",
    logo: (
      <svg
        width="96"
        height="23"
        viewBox="0 0 96 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-white fill-black"
      >
        <path d="M53.6896 0.965339H59.5709L56.6122 22.0721H50.7313L53.6896 0.965339ZM46.2752 0.965339L42.3065 13.1242L40.5746 0.965339H36.4617L31.2658 13.0881L30.6168 0.965339H24.9158L26.9005 22.0721H31.6268L37.4717 8.72251L39.5286 22.0721H44.1827L51.8677 0.965339H46.2752ZM95.6509 13.2324H81.6879C81.76 15.9747 83.4016 17.7786 85.8191 17.7786C87.641 17.7786 89.0845 16.8044 90.203 14.9463L94.9167 17.0895C93.2968 20.2807 89.8833 22.3606 85.6749 22.3606C79.9382 22.3606 76.1315 18.5001 76.1315 12.2945C76.1315 5.47532 80.6054 0.640625 86.9194 0.640625C92.4758 0.640625 95.9754 4.39293 95.9754 10.2378C95.9754 11.2121 95.8672 12.1862 95.6509 13.2324ZM90.4194 9.19153C90.4194 6.73812 89.0484 5.18671 86.8473 5.18671C84.6466 5.18671 82.6979 6.81028 82.1932 9.19153H90.4194ZM6.53496 7.32622L0.53125 14.342H11.2506L12.4557 11.0334H7.8627L10.6697 7.78807L10.6787 7.70145L8.85309 4.56074H17.0631L10.6986 22.0721H15.0536L22.7386 0.965339H2.88366L6.53314 7.32622H6.53496ZM69.132 5.18671C71.2067 5.18671 73.0251 6.30155 74.6124 8.21378L75.446 2.26424C73.9665 1.26303 71.9643 0.640625 69.3123 0.640625C64.0448 0.640625 61.0861 3.72547 61.0861 7.64011C61.0861 10.3552 62.6017 12.0148 65.0912 13.0881L66.2819 13.6294C68.5004 14.5765 69.096 15.0455 69.096 16.0468C69.096 17.048 68.0947 17.7425 66.5704 17.7425C64.0535 17.7514 62.0153 16.4617 60.4818 14.2607L59.6322 20.324C61.3784 21.6555 63.6173 22.3606 66.5704 22.3606C71.5764 22.3606 74.6524 19.4743 74.6524 15.4694C74.6524 12.7454 73.4435 10.9956 70.3948 9.62454L69.096 9.01117C67.2919 8.20839 66.6786 7.76639 66.6786 6.88243C66.6786 5.92632 67.5174 5.18671 69.132 5.18671Z" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Supabase",
    logo: (
      <svg
        width="99"
        height="31"
        viewBox="0 0 99 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-white fill-black"
      >
        <path d="M38.0781 26.5517V4.44531H42.0332V26.5517H38.0781Z" />
        <path d="M76.0156 11.5289H79.7927V13.3616C80.5953 11.8961 82.4697 11.1016 84.075 11.1016C86.0686 11.1016 87.6738 11.9875 88.4172 13.6052C89.5763 11.7725 91.124 11.1016 93.0571 11.1016C95.763 11.1016 98.3503 12.7811 98.3503 16.811V26.5515H94.5139V17.6361C94.5139 16.0175 93.7402 14.7965 91.926 14.7965C90.2305 14.7965 89.2189 16.1402 89.2189 17.7588V26.5525H85.2946V17.6361C85.2946 16.0175 84.4919 14.7965 82.7067 14.7965C80.9813 14.7965 79.9698 16.1097 79.9698 17.7588V26.5525H76.0156V11.5289Z" />
        <path d="M50.971 26.9864C46.5155 26.9864 43.2891 23.5951 43.2891 19.0402C43.2891 14.5579 46.5052 11.0859 50.971 11.0859C55.459 11.0859 58.6533 14.5901 58.6533 19.0402C58.6533 23.562 55.425 26.9864 50.971 26.9864ZM50.971 14.763C48.6732 14.763 46.8038 16.6816 46.8038 19.0412C46.8038 21.4006 48.6732 23.3193 50.971 23.3193C53.2691 23.3193 55.1376 21.4006 55.1376 19.0412C55.1376 16.6816 53.2691 14.763 50.971 14.763Z" />
        <path d="M67.1041 26.9864C62.6483 26.9864 59.4219 23.5951 59.4219 19.0402C59.4219 14.5579 62.638 11.0859 67.1041 11.0859C71.5918 11.0859 74.7861 14.5901 74.7861 19.0402C74.7861 23.562 71.5561 26.9864 67.1041 26.9864ZM67.1041 14.7119C64.7797 14.7119 62.8885 16.6539 62.8885 19.0393C62.8885 21.4248 64.7797 23.3667 67.1041 23.3667C69.4282 23.3667 71.3194 21.4248 71.3194 19.0393C71.3185 16.6539 69.4273 14.7119 67.1041 14.7119Z" />
        <path d="M30.1043 13.8198H21.4933L28.9509 9.40149L27.3131 6.48975L19.8556 10.9081L24.1602 3.25587L21.3228 1.57426L17.0181 9.22646V0.390625H13.7425V9.22731L9.43615 1.57426L6.59959 3.25502L10.9051 10.9072L3.44749 6.48975L1.80966 9.40064L9.26724 13.819H0.65625V17.1805H9.26641L1.80966 21.5989L3.44749 24.5106L10.9043 20.0931L6.59876 27.7453L9.43615 29.426L13.7416 21.7731V30.6097H17.0173V21.7739L21.322 29.426L24.1593 27.7453L19.8539 20.0923L27.3114 24.5106L28.9493 21.5989L21.4925 17.1813H30.1026V13.8198H30.1043ZM15.3803 20.0719C12.9104 20.0719 10.9084 18.0176 10.9084 15.4828C10.9084 12.9482 12.9104 10.8937 15.3803 10.8937C17.8502 10.8937 19.8521 12.9482 19.8521 15.4828C19.8521 18.0176 17.8502 20.0719 15.3803 20.0719Z" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Linear",
    logo: (
      <svg
        width="132"
        height="21"
        viewBox="0 0 132 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-white fill-black"
      >
        <path d="M62.1915 1.56344L62.1641 1.56944C61.1444 1.79968 60.627 2.14298 60.627 3.3812H60.6224L60.627 18.2354C60.714 19.2134 61.2396 19.5153 62.1641 19.7239L62.1915 19.7302V19.9404H55.0749V19.7302L55.1023 19.7239C56.0258 19.5153 56.5392 19.2134 56.6262 18.2354V3.78459L49.767 19.907H49.3889L42.7236 4.22197V17.8774C42.7236 19.1156 43.2415 19.4589 44.2617 19.6892L44.2886 19.6952V19.907H40.2031V19.6945L40.2299 19.6884C41.25 19.4583 41.7701 19.1149 41.7701 17.8767V3.3812C41.7701 2.14298 41.2521 1.79968 40.2319 1.56944L40.2051 1.56344V1.35156H46.2267L51.415 13.5466L56.6038 1.35156H62.1915V1.56344Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M73.6869 11.9082H65.346L65.345 11.9089C65.1832 14.7676 66.9661 17.1276 69.2933 17.3017C70.9984 17.4292 72.4968 16.3842 73.3307 14.6598L73.5704 14.7442C73.0957 17.9527 71.1917 20.343 67.9221 20.343C64.1966 20.343 62.0993 17.24 62.0093 13.3573C62.0067 13.2072 62.0077 13.058 62.0108 12.9098C62.0128 12.8174 62.0164 12.7253 62.021 12.6336C62.0235 12.5845 62.026 12.5385 62.0296 12.4871C62.0332 12.4357 62.0367 12.3843 62.0413 12.3329C62.1751 10.6186 62.7272 9.09318 63.6379 7.96441C64.2037 7.26377 64.884 6.72991 65.6549 6.37292C66.3321 6.03191 67.2841 5.84375 68.06 5.84375H68.0936C69.589 5.84375 71.0126 6.34957 71.9742 7.26875C73.0865 8.33244 73.6635 9.8816 73.6869 11.8732V11.9082ZM68.0376 6.65751C66.4679 6.68987 65.5327 8.56971 65.4162 11.1742H70.1802C70.229 9.14122 69.9141 7.78093 69.243 7.12995C68.9275 6.82435 68.5215 6.66555 68.0376 6.65751Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M87.1166 17.8132C87.1166 19.1145 87.6346 19.4738 88.6542 19.7151L88.6812 19.7204V19.9426H83.121V17.7972C82.4844 19.3954 81.0928 20.343 79.3634 20.343C76.4077 20.343 74.4214 17.6311 74.4219 13.5962C74.4219 11.337 75.0711 9.38915 76.2999 7.96379C77.4788 6.59618 79.1136 5.84313 80.9015 5.84313C81.7833 5.84313 82.5104 6.03297 83.121 6.42298V4.04938C83.121 3.52357 82.9927 3.14984 82.7292 2.90632C82.3923 2.59532 81.8128 2.47723 80.958 2.54627L80.9198 2.54928V2.32575L87.1166 0.5V17.8132ZM81.5116 18.1759C82.2768 18.1759 82.8477 17.8189 83.121 17.17V7.60945C82.8508 6.98655 82.2845 6.62951 81.5645 6.62951C79.8463 6.62951 78.7355 8.93874 78.7355 12.5088C78.7355 14.2241 79.0164 15.6722 79.5507 16.6965C80.0472 17.6508 80.7463 18.1759 81.5116 18.1759Z"
        />
        <path d="M91.7591 0.644531C93.0189 0.644531 93.9689 1.59481 93.9689 2.85465C93.9689 4.11454 93.0189 5.06476 91.7591 5.06476C90.5059 5.06476 89.5234 4.09383 89.5234 2.85465C89.5234 1.61546 90.5049 0.644531 91.7591 0.644531Z" />
        <path d="M93.8929 17.8119C93.8929 19.1132 94.4104 19.4725 95.4306 19.7137L95.4591 19.7191V19.9413H89.8937V9.62677C89.8937 8.22074 89.5645 7.80631 88.3612 7.69925L88.3281 7.69625V7.47934L93.8884 5.88281V17.8119H93.8929Z" />
        <path d="M108.142 17.8119C108.142 19.1132 108.66 19.4725 109.68 19.7137L109.706 19.7227V19.9449H104.146V17.7429C103.514 19.3284 102.079 20.3417 100.442 20.3417C98.5098 20.3417 97.2764 19.4595 96.8053 17.7725L96.7056 17.3371C96.6257 16.8988 96.587 16.454 96.5895 16.0085V9.62677C96.5895 8.22039 96.2598 7.806 95.057 7.69925L95.0234 7.69625V7.4797L100.584 5.88317V15.9034C100.584 17.3858 101.25 18.2023 102.459 18.2023C103.204 18.1763 103.819 17.7909 104.147 17.1419V9.60138C104.147 8.18904 103.863 7.75095 102.879 7.64751L102.848 7.6442V7.42663L108.142 5.88281V17.8119Z" />
        <path d="M131.286 19.7207V19.9432H125.726V10.0431C125.726 8.44255 125.157 7.66482 123.984 7.66482C123.016 7.66482 122.518 8.36649 122.271 8.95936C122.321 9.26455 122.346 9.57356 122.344 9.88292V18.1575C122.344 19.1285 122.629 19.5068 123.512 19.7144L123.539 19.721V19.9432H118.35V10.0431C118.35 8.4656 117.764 7.66482 116.608 7.66482C115.677 7.66482 115.206 8.31107 114.973 8.85663V18.1575C114.973 19.1285 115.258 19.5068 116.141 19.7144L116.168 19.721V19.9432H110.98V9.53993C110.98 8.16998 110.636 7.74353 109.448 7.63811L109.414 7.63511V7.41692L114.975 5.88578V8.21699C115.537 6.72625 116.847 5.84375 118.52 5.84375C120.424 5.84375 121.711 6.75327 122.158 8.40821C122.721 6.84638 124.185 5.84375 125.92 5.84375C128.3 5.84375 129.721 7.35383 129.721 9.88394V17.9984C129.721 18.978 130.152 19.4591 131.259 19.7144L131.286 19.7207Z" />
        <path d="M10.0364 20.5015C15.4631 20.5015 19.8622 16.0719 19.8622 10.608C19.8622 5.14408 15.4628 0.714844 10.0364 0.714844C4.61003 0.714844 0.210938 5.14276 0.210938 10.608C0.210938 16.0732 4.60973 20.5015 10.0364 20.5015Z" />
        <path d="M25.7254 19.9227C28.4386 19.9227 30.6383 15.7534 30.6383 10.6098C30.6383 5.46753 28.4386 1.29688 25.7254 1.29688C23.0122 1.29688 20.8125 5.46753 20.8125 10.6098C20.8125 15.7521 23.0122 19.9227 25.7254 19.9227Z" />
        <path d="M35.0496 10.6057C35.0496 15.2142 34.2759 18.9497 33.3217 18.9497C32.3675 18.9497 31.5938 15.2128 31.5938 10.6057C31.5938 5.99865 32.3675 2.26172 33.322 2.26172C34.2766 2.26172 35.0496 5.99763 35.0496 10.6057Z" />
      </svg>
    ),
  },
];

export const featureSectionConfig: FeatureSectionConfig = {
  title: "How We Deploy Intelligence",
  description:
    "From discovery to delivery, our forward-deployed teams integrate seamlessly with yours to build AI that works.",
  items: [
    {
      id: 1,
      title: "Discovery & Architecture",
      content:
        "We map your workflows, identify high-impact automation opportunities, and design AI systems that integrate with your existing stack.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Embedded Engineering",
      content:
        "Our engineers join your team on-site or remotely. We don't hand off specs - we ship production code alongside you.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "AI Agent Development",
      content:
        "Custom-built agents that handle complex multi-step tasks: from data processing to customer interactions to internal operations.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Continuous Optimization",
      content:
        "Post-launch support, monitoring, and iteration. Your AI gets smarter as your business evolves.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    },
  ],
};

export const bentoSectionConfig: BentoSectionConfig = {
  title: "What We Build",
  description:
    "AI-native products and agentic workflows that transform how your business operates.",
  items: [
    {
      id: 1,
      content: <FirstBentoAnimation />,
      title: "AI-Native Web & Mobile Apps",
      description:
        "Products built with intelligence at the core - not bolted on. From concept to App Store, with AI woven into every feature.",
    },
    {
      id: 2,
      content: <SecondBentoAnimation />,
      title: "Custom AI Agents",
      description:
        "Autonomous agents that handle complex workflows: customer support, data analysis, document processing, and beyond.",
    },
    {
      id: 3,
      content: (
        <ThirdBentoAnimation
          data={[20, 30, 25, 45, 40, 55, 75]}
          toolTipValues={[
            1234, 1678, 2101, 2534, 2967, 3400, 3833, 4266, 4700, 5133,
          ]}
        />
      ),
      title: "Process Automation",
      description:
        "Turn manual operations into intelligent workflows. We identify bottlenecks and deploy agents that eliminate them.",
    },
    {
      id: 4,
      content: <FourthBentoAnimation once={false} />,
      title: "Integration Architecture",
      description:
        "Connect your tools, data sources, and systems into a unified AI-powered ecosystem that actually works together.",
    },
  ],
};

export const benefits: Benefit[] = [
  {
    id: 1,
    text: "Ship AI features faster with embedded engineering teams.",
    image: "/Device-6.png",
  },
  {
    id: 2,
    text: "Reduce operational costs through intelligent automation.",
    image: "/Device-7.png",
  },
  {
    id: 3,
    text: "Scale your team's capabilities without scaling headcount.",
    image: "/Device-8.png",
  },
  {
    id: 4,
    text: "Stay ahead with cutting-edge AI integrated into your products.",
    image: "/Device-1.png",
  },
];

export const growthSectionConfig: GrowthSectionConfig = {
  title: "Built for Enterprise Scale",
  description:
    "Enterprise-grade security, compliance, and performance - because AI at scale requires serious infrastructure.",
  items: [
    {
      id: 1,
      content: (
        <div
          className="relative flex size-full items-center justify-center overflow-hidden transition-all duration-300 hover:[mask-image:none] hover:[webkit-mask-image:none]"
          style={{
            WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
            maskImage: `url("data:image/svg+xml,%3Csvg width='265' height='268' viewBox='0 0 265 268' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M121.384 4.5393C124.406 1.99342 128.319 0.585938 132.374 0.585938C136.429 0.585938 140.342 1.99342 143.365 4.5393C173.074 29.6304 210.174 45.6338 249.754 50.4314C253.64 50.9018 257.221 52.6601 259.855 55.3912C262.489 58.1223 264.005 61.6477 264.13 65.3354C265.616 106.338 254.748 146.9 232.782 182.329C210.816 217.759 178.649 246.61 140.002 265.547C137.645 266.701 135.028 267.301 132.371 267.298C129.715 267.294 127.1 266.686 124.747 265.526C86.0991 246.59 53.9325 217.739 31.9665 182.309C10.0005 146.879 -0.867679 106.317 0.618784 65.3147C0.748654 61.6306 2.26627 58.1102 4.9001 55.3833C7.53394 52.6565 11.1121 50.9012 14.9945 50.4314C54.572 45.6396 91.6716 29.6435 121.384 4.56V4.5393Z' fill='black'/%3E%3C/svg%3E")`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        >
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
        </div>
      ),
      title: "SOC 2 Compliant",
      description:
        "Our processes and infrastructure meet the highest security standards for enterprise clients.",
    },
    {
      id: 2,
      content: (
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden [mask-image:linear-gradient(to_top,transparent,black_50%)] -translate-y-20">
          <Globe className="top-28" />
        </div>
      ),
      title: "Global Deployment",
      description:
        "Teams across time zones, infrastructure across regions. We deploy where your business needs us.",
    },
  ],
};

export const quoteConfig: QuoteConfig = {
  quote:
    "Leroy Labs transformed our operations in 8 weeks. Their engineers embedded with our team and shipped an AI system that now handles 70% of our customer inquiries autonomously. The ROI was measurable within the first month.",
  author: {
    name: "Sarah Chen",
    role: "CTO, Fintech Startup",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
};

export const pricingConfig: PricingConfig = {
  title: "Engagement Models",
  description:
    "Flexible partnerships designed around your needs. From project-based builds to ongoing embedded teams.",
  pricingItems: [
    {
      name: "Project",
      href: "/contact",
      price: "Custom",
      period: "project",
      yearlyPrice: "Custom",
      features: [
        "Defined scope and deliverables",
        "Dedicated project team",
        "2-12 week typical timeline",
        "Full IP transfer on completion",
      ],
      description: "Best for specific products or automations",
      buttonText: "Get Quote",
      buttonColor: "bg-accent text-primary",
      isPopular: false,
    },
    {
      name: "Embedded",
      href: "/contact",
      price: "Custom",
      period: "month",
      yearlyPrice: "Custom",
      features: [
        "Engineers embedded with your team",
        "Ongoing development & iteration",
        "Direct Slack/communication access",
        "Weekly strategy sessions",
        "Priority support & rapid response",
        "Flexible team scaling",
      ],
      description: "Best for continuous AI development",
      buttonText: "Book a Call",
      buttonColor: "bg-secondary text-white",
      isPopular: true,
    },
    {
      name: "Enterprise",
      href: "/contact",
      price: "Custom",
      period: "year",
      yearlyPrice: "Custom",
      features: [
        "Dedicated team allocation",
        "Custom SLAs & compliance",
        "Executive strategy partnership",
        "Multi-project capacity",
        "On-site deployment available",
      ],
      description: "For large-scale AI transformation",
      buttonText: "Contact Us",
      buttonColor: "bg-primary text-primary-foreground",
      isPopular: false,
    },
  ],
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Thompson",
    role: "VP Engineering, HealthTech Co",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    description: (
      <p>
        Leroy Labs built our patient intake AI in 6 weeks.
        <Highlight>
          What used to take our staff 45 minutes now happens in 3.
        </Highlight>{" "}
        Their engineers felt like an extension of our team.
      </p>
    ),
  },
  {
    id: "2",
    name: "Elena Rodriguez",
    role: "Founder, E-commerce Platform",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    description: (
      <p>
        We needed AI-powered personalization fast.
        <Highlight>Leroy Labs delivered in 4 weeks</Highlight> what our
        estimates said would take 6 months internally.
      </p>
    ),
  },
  {
    id: "3",
    name: "David Kim",
    role: "CTO, Legal Tech Startup",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    description: (
      <p>
        The document analysis agent they built
        <Highlight>reduced our contract review time by 80%.</Highlight> Our
        lawyers now focus on strategy instead of reading.
      </p>
    ),
  },
  {
    id: "4",
    name: "Amanda Foster",
    role: "Head of Ops, Logistics Company",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    description: (
      <p>
        Route optimization AI that actually works.
        <Highlight>15% fuel cost reduction in the first quarter.</Highlight>{" "}
        Leroy Labs understood our constraints.
      </p>
    ),
  },
  {
    id: "5",
    name: "James Liu",
    role: "CEO, SaaS Platform",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    description: (
      <p>
        Their embedded engineer became invaluable.
        <Highlight>
          We shipped 3 AI features in 8 weeks
        </Highlight>{" "}
        that our product roadmap had scheduled for next year.
      </p>
    ),
  },
  {
    id: "6",
    name: "Priya Sharma",
    role: "Director of Innovation, Enterprise Corp",
    img: "https://randomuser.me/api/portraits/women/28.jpg",
    description: (
      <p>
        Leroy Labs brought clarity to our AI strategy.
        <Highlight>
          They identified automation opportunities we hadn&apos;t considered
        </Highlight>{" "}
        and executed flawlessly.
      </p>
    ),
  },
  {
    id: "7",
    name: "Michael Brooks",
    role: "Founder, PropTech Startup",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    description: (
      <p>
        Our property valuation AI
        <Highlight>now processes in seconds what took days.</Highlight>{" "}
        Investors noticed the operational efficiency immediately.
      </p>
    ),
  },
  {
    id: "8",
    name: "Nina Patel",
    role: "COO, Marketing Agency",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    description: (
      <p>
        Content generation and campaign optimization AI.
        <Highlight>Our team output tripled</Highlight> without adding
        headcount. Game-changing partnership.
      </p>
    ),
  },
];

export const faqSectionConfig: FAQSectionConfig = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about working with Leroy Labs. Have something else in mind? Let's talk.",
  faQitems: [
    {
      id: 1,
      question: "What makes Leroy Labs different from other AI consultancies?",
      answer:
        "We're builders, not advisors. Our engineers embed directly with your team and ship production code. We don't hand off PowerPoint decks - we deliver working AI systems. Our team comes from top engineering organizations and research labs, bringing deep technical expertise to every engagement.",
    },
    {
      id: 2,
      question: "What does 'forward deployment' mean?",
      answer:
        "Forward deployment means our engineers work alongside your team - either on-site or as deeply integrated remote collaborators. We join your Slack, attend your standups, and commit to your repos. The goal is seamless collaboration, not arms-length consulting.",
    },
    {
      id: 3,
      question: "What types of AI solutions do you build?",
      answer:
        "We specialize in three areas: AI-native product development (web and mobile apps with intelligence built in), custom AI agents for business process automation, and integration architecture that connects AI capabilities across your existing systems.",
    },
    {
      id: 4,
      question: "How long does a typical engagement last?",
      answer:
        "Project-based work typically runs 4-12 weeks depending on scope. Embedded engagements are ongoing partnerships that can scale up or down based on your needs. We're flexible and work with you to define the right structure.",
    },
    {
      id: 5,
      question: "Do you work with early-stage startups?",
      answer:
        "Yes. We work with companies from seed stage to enterprise. For startups, we often help build initial AI-powered MVPs or add intelligent features to existing products. The key is having a clear problem to solve and commitment to shipping.",
    },
    {
      id: 6,
      question: "What about data privacy and security?",
      answer:
        "Security is foundational to our work. We're SOC 2 compliant, sign NDAs and DPAs as standard, and can work within your existing security frameworks. For regulated industries, we have experience with HIPAA, SOX, and other compliance requirements.",
    },
  ],
};

export const ctaSectionConfig: CTASectionConfig = {
  id: "contact",
  title: "Let's Automate Your Business",
  backgroundImage: "/agent-cta-background.png",
  button: {
    text: "Book a Discovery Call",
    href: "https://cal.com/leroylabs",
  },
  subtext: "30-minute call to explore your AI opportunities",
};

export const homeConfig = {
  hero: heroConfig,
  companyLogos,
  featureSection: featureSectionConfig,
  bentoSection: bentoSectionConfig,
  benefits,
  growthSection: growthSectionConfig,
  quote: quoteConfig,
  pricing: pricingConfig,
  testimonials,
  faqSection: faqSectionConfig,
  ctaSection: ctaSectionConfig,
};
