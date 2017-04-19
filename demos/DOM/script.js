var container = document.createElement('div');
container.className = 'container';
container.style.width = '450px';
container.style.height = '450px';
document.body.appendChild(container);

var img = document.createElement('img');
img.src = "http://placehold.it/350x150";
img.style.float = "left";
img.style.marginRight = "10px";
container.appendChild(img);

var greeting = document.createElement('p');
greeting.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
container.appendChild(greeting);

var link = document.createElement('a');
link.href = '#';
link.innerText = "click this link!";
greeting.appendChild(link);

container.addEventListener('mouseenter', function() {
  greeting.style.color = 'red';
  greeting.innerText = 'Wow, this is #awesome!';
});

container.addEventListener('mouseleave', function() {
  greeting.style.color = 'black';
  greeting.innerText = 'Goodbye :[';
});

img.addEventListener('click', function() {
  alert('Are You Over 18?');
});

window.addEventListener('unload', function() {
  alert('Adios Amigos!!!!!!!!!!!!');
});
