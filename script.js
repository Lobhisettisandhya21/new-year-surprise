const friends = {
  likitha: {
    password: "sister",
    message: `I love you so much.
May this year be the calmest, safest, and most beautiful chapter of your life.
I pray that God gives you everything your heart needs—peace, strength, happiness, and success in all that you do.
No matter where life takes you, always remember that you are deeply loved and never alone.
I feel incredibly proud to call you my sister—not just today, but every single day.
Keep shining, keep believing in yourself, and never forget how special you are to me.
Lots and lots of love, always 🤍✨ ❤️`
  },

  teja: {
    password: "bava&mardal",
    message: `I’m really grateful to have you in my life.
You’re not just my sister’s husband—you’re someone I feel completely comfortable with and trust.
Your friendly nature, understanding, and support mean a lot to me.
Thank you for always listening without judging and for being there like a true elder brother.
I feel lucky that my sister has a partner like you, and even luckier to have you as family.
Wishing you peace, happiness, and success always 🤍 🌟 ❤️`
  },

  bhaskar: {
    password: "nanna",
    message: `Dad, you are my biggest blessing.
Your love, care, and warmth make everything feel safe and okay.
I love how funny you are and how we laugh, play, and even fight in our own little way—it’s all love to me.
You work so hard every day, often without rest, just to keep us happy, and that means more to me than I can ever explain.
I may not say it often, but my heart is always full because of you.
I love you so, so much 🤍 ❤️`
  },

  anuhya: {
    password: "sister",
    message: `happy new year anuhya akka.
wishing you luck and happiness. u have been a good friend to my sister,i appreciate that.
we were connected because of my sister and loki annayya. you guys have never make me feel like i am burden, tq for that.
Because of you guys i have enjoyed somehow, thank you.
and once again happy new year🤍❤️`
  },
  
  satyavathi: {
    password: "amma",
    message: `Mom, you are my softest place and my biggest strength.
Sometimes you get angry at me, but I know it always comes from love.
When I’m not near you, I feel how lonely your heart becomes.
Your food is full of love and comfort, and no one cooks like you.
I don’t like anyone else’s dishes, because they never feel like your dishes.
You think about everyone before yourself, always caring, always giving.
Your heart is so pure and innocent, like a child’s.
I love you so much, more than words can ever say 🤍 ❤️`
  },

  mohith: {
    password: "trust",
    message: `You are so kind, and that kindness reaches me every time I talk to you.
You listen to me patiently, to everything I say, and you never make me feel small or unheard.
The trust you give me feels pure and safe, like something rare in this world.
With you, I feel calm, understood, and comfortable being myself.

You are so handsome in the way you smile, the way you carry yourself, and the way you care.
I love how you dance with so much feeling, and the way you sing—it always stays with me.
Being connected to you feels gentle, warm, and very special.

You are so special to me in ways I don’t always know how to explain.
Being with you makes me imagine tomorrows that feel peaceful and right.
There’s a quiet hope in my heart that life continues to place us side by side,
growing, choosing, and building something meaningful over time.
With you, even the idea of the future feels warm and comforting 🤍 ❤️`
  },

  dinesh: {
    password: "friend",
    message: `You are so caring and supportive, and that means a lot to me.
You accept me and adore me just the way I am, and that makes me feel truly special and unique.
Your presence brings comfort, positivity, and a sense of ease into my life.
I always feel happy and at peace when I’m with you.
Having a friend like you is something I genuinely value 🥂 ❤️`
  }
};

// ---------- LOGIN FUNCTION ----------
function login() {
  const name = document.getElementById("name").value.toLowerCase().trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (friends[name] && friends[name].password === pass) {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("surpriseBox").classList.remove("hidden");
    document.getElementById("message").innerText = friends[name].message;
    startConfetti();
  } else {
    error.innerText = "Wrong name or relation 😜";
  }
}

// ---------- 🎉 CONFETTI EFFECT ----------
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#ff4081", "#ffd700", "#00e5ff", "#76ff03", "#ff9100"];
  const pieces = [];

  for (let i = 0; i < 180; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    for (let p of pieces) {
      ctx.fillStyle = p.color;
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    }

    ctx.fill();
    update();
  }

  function update() {
    for (let p of pieces) {
      p.y += Math.cos(p.d) + 2;
      p.x += Math.sin(p.d);

      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    }
  }

  setInterval(draw, 20);
}

