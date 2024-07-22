import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";


export function Faq() {
    return (
        <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
            <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
                <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">Frequently asked questions</h3>
                <h1 className="py-4 text-2xl font-medium text-[#172026] pt-[16px] lg:text-[42px] lg:leading-[58px]">Lets clarify some of your questions</h1>
                <p className="text-[#36485C] pb-[24px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi facilis quis explicabo minima exercitationem officiis reiciendis quasi, .</p>
            </div>

            <div className="lg:w-2/3">
                <Accordion type="single" collapsible className="flex flex-col gap-y-4 bg-[#E3F1FF] p-[16px] rounded-[8px] mb-3 ">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-medium text-[#172026] lg:text-[18px]"><p>Is it accessible?</p></AccordionTrigger>
                        <AccordionContent className="pt-2 text-[#36485C] lg:text-[17px]">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="flex flex-col gap-y-4 bg-[#E3F1FF] p-[16px] rounded-[8px] mb-3 ">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-medium text-[#172026]"><p>Is it accessible?</p></AccordionTrigger>
                        <AccordionContent className="pt-2 text-[#36485C] lg:text-[17px]">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="flex flex-col gap-y-4 bg-[#E3F1FF] p-[16px] rounded-[8px] mb-3">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-medium text-[#172026]"><p>Is it accessible?</p></AccordionTrigger>
                        <AccordionContent className="pt-2 text-[#36485C] lg:text-[17px]">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="flex flex-col gap-y-4 bg-[#E3F1FF] p-[16px] rounded-[8px] mb-3 ">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-medium text-[#172026]"><p>Is it accessible?</p></AccordionTrigger>
                        <AccordionContent className="pt-2 text-[#36485C] lg:text-[17px]">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}