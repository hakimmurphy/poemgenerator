window.addEventListener('load', displayPoems, false)

const poems = [
    {
        title: 'Refresh',
        words: `Update <br> Reboot <br> Refresh <br> Renew <br> Reboot <br> Update <br> Refresh`,
        src: 'images/old_computer.jpg'
    },
    {
        title: 'Foreign World',
        words: 'Ancient Times precipitate ancient places <br> With ancient people who have now mixed races. <br> New trees, New life, New bacteria <br> Yet old news and genetic material.',
        src: 'images/foreign_land.jpg'
    },
    {
        title: 'Wonderment',
        words: 'Is not a word persay <br> Means the sky is the limit <br> Like the feeling of the haze <br> Purple plants help people to become undivided. <br> Live, and inspire <br> Because people work, sleep, and obey. <br> Is not the model until I expire. <br> Live free with no shame.',
        src: 'images/wonderment.jpg'
    },
    {
        title: 'Perception',
        words: 'A.k.a Brainwashing. <br> Doctors are doctors <br> Lawyer are lawyers <br> Water is water <br> Respect the difference <br> Life is perception <br> And what you make it.',
        src: 'images/perception.jpg'
    },
    {
        title: 'Ancient Cities',
        words: 'From Beach to Beach <br> I teach <br> And learn about; time past. <br> As the cat rubs my leg <br> And storm me <br> They be <br> To be fed <br> The locals take care though <br> But the seaside port <br> Has too much history to teach.',
        src: 'images/ancient_cities.jpg'
    },
    {
        title: 'Sea Side',
        words: 'Fire is burning <br> Looking out at the infinite <br> Yearning. <br> Wave sounds crashing <br> Turkish in my ear. <br> Yet no fear. <br> Hearing. <br> Kindness <br> Softness <br> Expressing <br> Love, though <br> Living Limitless',
        src: 'images/sea_side.jpg'
    },
    {
        title: 'Loving',
        words: 'Caring of me… <br> Caring of your… <br> Makes us feel good… <br> To be with each other… <br> Or what makes you feel fulfilled… <br> Life is ours… <br> One chance to make all the Love… <br> Come, and it is coming… <br> My Love is Loving…',
        src: 'images/loving.jpg'
    },
    {
        title: 'Forever',
        words: 'To be Intrigued; <br> With mystery; <br> And delusions; <br> With history; <br> And diversity; <br> With memory; <br> And sharpness; <br> Beyond compare!',
        src: 'images/forever.jpg'
    },
    {
        title: 'Politeness',
        words: 'Humanity shows itself, <br> From what some would say is <br> A primitive culture. <br> Yet compassion and respect is abundant. <br> One can learn through themself. <br> The real biz <br> Not be a vulture, <br> And try not to make your life redundant.',
        src: 'images/politeness.jpg'
    },
    {
        title: 'Somewhere Else',
        words: 'Forgetting things. <br> Sometimes cost money. <br> That you did not have. <br> But yet the experience is worth, <br> The money, because; <br> You cannot take the money with you. <br> Be that as it may <br> I will keep pushing, to get, <br> Somewhere else…',
        src: 'images/somewhere_else.jpg'
    },
    {
        title: 'Live PA',
        words: 'Freedom and Expression <br> Are at the maximum… <br> As I toil in the underground <br> Making people Head’s bounce… <br> Dirty, but yet expressing <br> Mind game, on the beats.',
        src: 'images/live_pa.jpg'
    },
    {
        title: 'Traveling',
        words: 'Making moves like butter, <br> Moving in silence, <br> Rotating like ship’s rudders <br> Staying away from violence, <br> Reacting so much people stutter, <br> People are like your highness; <br> I keeps it moving in the world, <br> because I steady be Traveling.',
        src: 'images/traveling.jpg'
    },
    {
        title: 'Chill, love, and study',
        words: 'One love, <br> One team, <br> One theory, <br> One heart, <br> One soul, <br> To become one!',
        src: 'images/chill_love_study.jpg'
    },
    {
        title: 'Clouds',
        words: 'Cloudy moments; <br> That inspire sleep; <br> due to the darkness; <br> and lack of sunshine; <br> warm weather with clouds; <br> make one feel; <br> From deep inside; <br> the psyche of the subconscious; <br> as the Id continues to react; <br> though there is no sun.',
        src: 'images/clouds.jpg'
    },
    {
        title: 'Poly',
        words: 'Why is it so hard to be Poly? <br> Means many, many things… <br> More than one! <br> The balance is hard to strike, <br> but with practice, <br> it can be done!',
        src: 'images/poly.jpg'
    },
    {
        title: 'Kino',
        words: 'Movie is kino <br> Kino is movie <br> Movie is cinema <br> Cinema is art <br> art is passion <br> passion is love <br> love is feeling <br> feeling is alive <br> alive is life <br> life is like a kino!',
        src: 'images/kino.jpg'
    },
    {
        title: 'Underwater Question',
        words: 'The question is, <br> what is underwater? <br> A sound, <br> this recoding. <br> I made today. <br> banging at 125!',
        src: 'images/underwater_question.jpg'
    },
    {
        title: 'Composition',
        words: 'To study <br> and learn <br> how to create tones <br> that are pleasing to the ear <br> and make grooves. <br> This is the basic of composition.',
        src: 'images/composition.jpg'
    },
    {
        title: 'Walking',
        words: 'Always a good time for a stroll. <br> The city is dead but alive. <br> The day of rest, but people still need to eat. <br> Eat what the must to fill their bellies. <br> I walk to listen, to live, to feel. <br> To experience life to the fullest. <br> Understanding the culture around me. <br> Trying to understand the world.',
        src: 'images/walking.jpg'
    },
    {
        title: 'Rural Walking',
        words: 'Delicious breakfast, <br> in the rural part of town, <br> walking through the clouds, <br> into the unknown. <br> Surfacing in an ancient city <br> of beauty and history. <br> Walking through the dark clouds. <br> Gaining energy from nature. <br> Life is happening, and exercise <br> extends the life in the rural or urban space.',
        src: 'images/rural_walking.jpg'
    },
    {
        title: 'Photos',
        words: 'Organising, <br> Moving, <br> Copying, <br> Describing… <br> In what we call metadata. <br> So much digital content. <br> If is hard not to be faded. <br> Like land mass of all the continents. <br> Photos.',
        src: 'images/photos.jpg'
    },
    {
        title: 'Misspellings',
        words: 'Misconceptions <br> Misread <br> People don’t take the time to truly understand, <br> The divergence between cultures man. <br> It is sad that we are like this. <br> Afraid of the differences. <br> Just ask, to try and gain knowledge, <br> Like people do when they in college…',
        src: 'images/misspellings.jpg'
    },
    {
        title: 'Chillmode',
        words: 'Maxin and chillaxin, <br> Laying around making it happen, <br>Thinking about making, <br> Smacking my gums <br> with thoughts of fun. <br> Chilling is a acquired skill <br> like doing break dancing windmills. <br> I still love, <br> I still hate, <br> But one thing is, I can never front on my fate. <br> And that is chilling with my mate!',
        src: 'images/chillmode.jpg'
    },
    {
        title: 'Organization III',
        words: 'Continuing to find memories. <br> Learning how lucky I was in my universe. <br> Went many places that has been crystallised. <br> Time is literally stopped as I scroll. <br> I type, using my brain in order to describe, <br> Where I have been, went, and where I will go. <br> The future is bright as I keep organizing. <br> Learning from my past. <br> As we are involved in an infinite loop, <br> Things continue to happen. <br> As I continue to organize.',
        src: 'images/organization_3.jpg'
    },
    {
        title: 'Geopolitical Problems',
        words: 'Yet to be solved, <br> Will probably never be solved. <br> Due to human nature, <br> which are culture haters. <br> Your neighbours hate you, <br> because they are brainwashed and minds askew. <br> Senseless fighting, <br> Bright lighting… <br> All to make a buck, <br> and hence they don’t give a fuck!',
        src: 'images/geopolitical.jpg'
    },
    {
        title: 'Story Time',
        words: 'Mad stories about mad things. <br> Some about love, some about hate. <br> Fear but yet with a mate. <br> These stories have multiple meanings. <br> And comes from people dreaming. <br> Dreaming about this, <br> Dreaming about that, <br> Always really seeming, <br> to go deep, deep into the hole. <br> And surface like a mole. <br> These stories should always be innate.',
        src: 'images/story_time.jpg'
    },
    {
        title: 'Beating Energy',
        words: 'Come to the gate, wanging. <br> That is what they were, saying. <br> Tunes beating hard, pumping. <br> The kick drum, stomping. <br> Making the room, pulsate. <br> Energy burning like, white phosphate. <br> Dancers and jackers, pitting. <br> On game, spitting. <br> From the rhythms of shame. <br> Is the game!',
        src: 'images/beating_energy.jpg'
    },
    {
        title: 'Thoughts and Expressions',
        words: 'Many things have come to me. <br> Many realisations have become apparent. <br> My musical skills have grown. <br> The understanding of proposing a feeling. <br> Creating moments of time that other people enjoy. <br> Capturing these images into audio form. <br> The ability to arrange tunes like a beast. <br> Awakening my way to show love. <br> Life is about love, for the most part. <br> And doing what your love for, love! <br> These thoughts have come to me, <br> and with experience I have the expressive abilities - <br> to show these expressions.',
        src: 'images/thoughts_expressions.jpg'
    },
    {
        title: 'Arrangements',
        words: 'Come in many forms, <br> Often how life is born, <br> Birthed to a sequence of something, <br> or another. <br> This is the law of the universe, <br> Perhaps alternate universes differ, <br> But only in sequence for that is the only difference <br> of being.',
        src: 'images/arrangements.jpg'
    },
    {
        title: 'Versions',
        words: 'Making different <br> Always different <br> Things are different <br> Because the laws of physics dictates this. <br> Many different <br> Super different <br> Tunes are different <br> Because the laws of Jack dictates this.',
        src: 'images/versions.jpg'
    },
    {
        title: 'Audio Visual',
        words: 'Music and Viewing; <br> Making videos for the seeing, <br> Not for the listening, <br> but it is for the listening, <br> the glistening of pixels as they, <br> protrude through the tv, <br> Is an amazing thing. <br> And when you accomplish this, <br> it is like discovering 4D.',
        src: 'images/audio_visual.jpg'
    },
    {
        title: 'Freestyle Mania',
        words: 'Developing feelings from ancestors, <br> From the cosmos, <br> Looking at the past in the sky, <br> Unleashes the power of the third eye. <br> Deepening my understanding of creation, <br> From this and parallel universes, <br> The past teaches us lessons. <br> That are fore told by mystics <br> I channel those feelings. <br> I saviour these thoughts. <br> As my hand machines sonics into audible; <br> waveforms!',
        src: 'images/freestyle_mania.jpg'
    },
    {
        title: 'Unity',
        words: 'Making moves with friends, <br> To create that great music, <br> Composing tunes through help, <br>Compositions of life. <br> Appear and make for great sonics, <br> The tracks move like bionics, <br> Happy to take part in this, <br> Cannot wait to finish.',
        src: 'images/unity.jpg'
    },
    {
        title: 'Cooking',
        words: 'With mad style, <br> I learn how to freestyle, <br> And simmer, boil, and create. <br> Sauces that taste delicious <br> Somewhat nutritious <br> And vicious to the taste buds.',
        src: 'images/cooking.jpg'
    },
    {
        title: 'Learning',
        words: 'The difference between you and me. <br> Like .001%. <br> As a species we have to adapt. <br> Understand what challenges lay ahead. <br> The watershed moments of life. <br> Define our characteristics. <br> How we relate to each other: <br> Even the languages play a part in this. <br> What we think, the way we act, <br> And, how we learn.',
        src: 'images/learning.jpg'
    },
    {
        title: 'Perspective',
        words: 'Look forward, <br> look backward, <br> look left, <br> look right, <br> look up, <br> look down, <br> look all around. <br> Because perspective is everything.',
        src: 'images/perspective.jpg'
    }
]

function displayPoems() {
    let container = document.querySelector('.container')
    let button = document.querySelector('.btn')


    button.addEventListener('click', rand, false)

    function rand() {
        var random = Math.floor(Math.random() * poems.length)
        let rImg = document.createElement('img')
        let rH1 = document.createElement('h1')
        let rP = document.createElement('p')
        container.innerHTML = ''
        rH1.className = 'randomH1'
        rH1.innerHTML = `<h1>${poems[random].title}</h1>`
        rP.className = 'randomP'
        rP.innerHTML = `<p>${poems[random].words}</p>`
        rImg.className = 'randomImg'
        rImg.src = poems[random].src
        container.appendChild(rH1)
        container.appendChild(rImg)
        container.appendChild(rP)
    }
}