document.addEventListener('DOMContentLoaded', function() {
    const domainButtons = document.querySelectorAll('.domain-button');
    const domainInfo = document.querySelector('.domain-info');

    // Add click event listener to each domain button
    domainButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Clear previous content
            domainInfo.innerHTML = '';

            // Get domain from data-domain attribute
            const domain = this.getAttribute('data-domain');

            // Populate domain information
            switch (domain) {
                case 'Development':
                    domainInfo.innerHTML = `
                        <h2>${domain}</h2>
                        <p>Explore courses in web development, mobile app development, and more.</p>
                        <button style="padding: 7px;background-color: #0852f3;border-radius: 10px;"><a href="../domains/developmentCourses.html" style="text-decoration: none;font-size:15px;color: white;">View Domain</a></button>     

                    `;
                    break;
                case 'Business':
                    domainInfo.innerHTML = `
                        <h2>${domain}</h2>
                        <p>Master business management, entrepreneurship, and leadership skills.</p>
                        <button style="padding: 7px;background-color: #0852f3;border-radius: 10px;"><a href="../domains/business Courses.html" style="text-decoration: none;font-size:15px;color: white;">View Domain</a></button>     

                    `;
                    break;
                case 'Finance & Accounting':
                    domainInfo.innerHTML = `
                        <h2>${domain}</h2>
                        <p>Learn financial analysis, accounting principles, and investment strategies.</p>
                        <button style="padding: 7px;background-color: #0852f3;border-radius: 10px;"><a href="../domains/Finance & Accounting Courses.html" style="text-decoration: none;font-size:15px;color: white;">View Domain</a></button>     

                    `;
                    break;
                case 'IT & Software':
                    domainInfo.innerHTML = `
                        <h2>${domain}</h2>
                        <p>Discover courses in cybersecurity, network administration, and software engineering.</p>
                        <button style="padding: 7px;background-color: #0852f3;border-radius: 10px;"><a href="../domains/IT & Software Courses.html" style="text-decoration: none;font-size:15px;color: white;">View Domain</a></button>     

                    `;
                    break;
                case 'Office Productivity':
                    domainInfo.innerHTML = `
                        <h2>${domain}</h2>
                        <p>Enhance your productivity with courses in Microsoft Office, project management, and more.</p>
                        <button style="padding: 7px;background-color: #0852f3;border-radius: 10px;"><a href="../domains/Office Productivity Courses.html" style="text-decoration: none;font-size:15px;color: white;">View Domain</a></button>     

                    `;
                    break;
                case 'Personal Development':
                    domainInfo.innerHTML = `
                        <h2>${domain}</h2>
                        <p>Improve your communication, time management, and personal effectiveness skills.</p>
                        <button style="padding: 7px;background-color: #0852f3;border-radius: 10px;"><a href="../domains/Personal Development Courses.html" style="text-decoration: none;font-size:15px;color: white;">View Domain</a></button>     

                    `;
                    break;
                case 'Design':
                    domainInfo.innerHTML = `
                        <h2>${domain}</h2>
                        <p>Master graphic design, UX/UI, and creative skills.</p>
                        <button style="padding: 7px;background-color: #0852f3;border-radius: 10px;"><a href="../domains/DesignCourses.html" style="text-decoration: none;font-size:15px;color: white;">View Domain</a></button>     

                    `;
                    break;
                case 'Marketing':
                    domainInfo.innerHTML = `
                        <h2>${domain}</h2>
                        <p>Explore digital marketing, social media marketing, and marketing strategy.</p>
                        <button style="padding: 7px;background-color: #0852f3;border-radius: 10px;"><a href="../domains/Marketing Courses.html" style="text-decoration: none;font-size:15px;color: white;">View Domain</a></button>     

                    `;
                    break;
                case 'Health & Fitness':
                    domainInfo.innerHTML = `
                        <h2>${domain}</h2>
                        <p>Stay fit and healthy with courses in nutrition, exercise science, and personal wellness.</p>
                        <button style="padding: 7px;background-color: #0852f3;border-radius: 10px;"><a href="../domains/Health & Fitness Courses.html" style="text-decoration: none;font-size:15px;color: white;">View Domain</a></button>     

                    `;
                    break;
                default:
                    domainInfo.innerHTML = `<p>No information available for ${domain}</p>`;
            }
        });
    });
});
