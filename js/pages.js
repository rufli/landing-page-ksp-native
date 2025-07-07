// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Accordion for FAQ
const accordionHeaders = document.querySelectorAll('.accordion-header');
if (accordionHeaders.length > 0) {
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;
            
            accordionItem.classList.toggle('active');
            
            if (accordionItem.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });
}

// Form Submission for Product Pages
const productForms = document.querySelectorAll('.product-form');
if (productForms.length > 0) {
    productForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            
            alert(`Terima kasih ${name}! Permohonan Anda telah kami terima. Petugas kami akan segera menghubungi Anda.`);
            
            this.reset();
        });
    });
}