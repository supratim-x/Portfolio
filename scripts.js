document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.querySelector('.name');
    const titleElement = document.querySelector('.title');
    const skillCards = document.querySelectorAll('.skill-card');
    const projectCards = document.querySelectorAll('.project-card');

    // Typewriter effect for name
    const typeWriter = (element, text, speed) => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
            }
        }, speed);
    };

    // Apply typewriter effect to name
    setTimeout(() => {
        typeWriter(nameElement, 'Supratim Das', 100);
        setTimeout(() => {
            titleElement.style.opacity = '1';
            titleElement.style.transform = 'translateY(0)';
        }, 2000);
    }, 500);

    // Animate skill and project cards
    const animateElements = (elements) => {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200); // Add some delay for animation effect
        });
    };

    animateElements(skillCards);
    animateElements(projectCards);

    // Handle form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        };

        // Example of handling form submission
        console.log('Form submitted:', data);

        // Provide user feedback
        alert('Your message has been sent successfully!');
        form.reset();
    });
});
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/send-email', (req, res) => {
    const mailOptions = {
        from: req.body.email,
        to: 'dassupratim780@gmail.com',
        subject: 'Contact Form Submission',
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nPhone: ${req.body.phone}\nMessage: ${req.body.message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error occurred');
        } else {
            res.send('Email sent: ' + info.response);
        }
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the stored theme
    document.body.setAttribute('data-theme', currentTheme);
    
    // Update button text based on current theme
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    
    themeToggle.addEventListener('click', () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
});
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});
