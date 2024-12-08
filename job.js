document.getElementById('click-sebastien').addEventListener('click', (event) => {
    event.preventDefault(); // Empêche la soumission du formulaire
    generateApplication(`...`, 'Dary Sebastien PETION');
}, { once: true });

document.getElementById('click-yvie').addEventListener('click', (event) => {
    event.preventDefault(); // Empêche la soumission du formulaire
    generateApplication(`...`, 'Yves-Marie SABBAT');
}, { once: true });



let clickSebastien = document.getElementById('click-sebastien')

            clickSebastien.addEventListener('click', ()=>{
            let companyName = document.getElementById('companyname')
            let jobAdress = document.getElementById('jobadress')
            let date = document.getElementById('date')
            
            let demandeJob = document.createElement('textarea')
            demandeJob.innerHTML=(`Dary Sebastien PETION
26, Impasse Jean Claude, Ave Christophe Channel Prolonge, Carrefour
Ouest,  Haiti
ddarymix2@gmail.com
+509 31 11 11 41 

${companyName.value}
${jobAdress.value}
                
${date.value}
                
Subject: Unsolicited Application for a Position at ${companyName.value}
                
Dear Sir/Madam,
                
I am writing to you to apply for a position with your company. Currently residing in Haiti, I am very interested in the opportunity to join a dynamic organization such as yours in the United States.
                
With a degree in residential and industrial electricity and over 2 years of experience in the sector, I have developed solid skills in residential electricity installation, industrial electricity and green energy installation, especially the installation of photovoltaic systems. These assets allow me to make a significant contribution to your team.
                
I am particularly motivated by your job application and wish to contribute to your mission by putting my skills at your service.
                
I remain available for a virtual interview to discuss my application and my ability to integrate effectively into your team.
                
I thank you for your attention to my application and hope to have the opportunity to collaborate with you.
                
Please accept, Madam, Sir, the expression of my distinguished greetings.
                         
Dary Sebastien PETION`)
            document.body.appendChild(demandeJob)
}, {once:true})













let clickYvie = document.getElementById('click-yvie')

            clickYvie.addEventListener('click', ()=>{
            let companyName = document.getElementById('companyname')
            let jobAdress = document.getElementById('jobadress')
            let date = document.getElementById('date')
            
            let demandeJob = document.createElement('textarea')
            demandeJob.innerHTML=(`Yves-Marie SABBAT
[Address]
Ouest, Haiti
yvesmariesab@gmail.com
+509 3455 14 61

${companyName.value}
${jobAdress.value}

${date.value}

Subject: Application for a position at ${companyName.value}

Dear Sir/Madam,

Following the publication of your job offer, I would like to submit my application. With solid experience in several fields such as office computing, culinary arts, and aesthetics and beauty care, I am convinced that my skills and motivation make me an ideal candidate to join your team.

During all my years of experience, I had the opportunity to work as a secretary at INFONET, a major school in Haiti, and to also acquire a lot of experience in RANTONET Cyber-Café. This has allowed me to develop key skills such as great computer skills and other technological products, which I hope will contribute to the success of your projects.

${companyName.value}, recognized as one of the best in the field, perfectly matches my career aspirations. I am particularly interested in ${companyName.value}

I remain at your disposal for a virtual interview to discuss my application.

Pending your response, please accept, Madam, Sir, the expression of my distinguished greetings.
Yves-Marie SABBAT
`)
            document.body.appendChild(demandeJob)
}, {once:true})













