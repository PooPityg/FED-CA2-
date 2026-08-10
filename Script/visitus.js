const faqs = document.querySelectorAll(".faq")
const faqinfos = document.querySelectorAll(".faqinfo")
// Remove hidden class from the faq when hovering above the corresponding info box //
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