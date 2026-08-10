const faqs = document.querySelectorAll(".faq")
const faqinfos = document.querySelectorAll(".faqinfo")

faqs.forEach((faq, index) => {
    faq.addEventListener('mouseenter', () => {
        faqinfos[index].classList.remove("hidden");
        faqinfos[index].classList.add("faqhighlight");
    });

    faq.addEventListener('mouseleave', () => {
        faqinfos[index].classList.add("hidden");
        faqinfos[index].classList.remove("faqhighlight");
    });
});