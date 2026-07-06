
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');

if (toggle && header) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

const form = document.querySelector('#quoteForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const phone = data.get('phone') || '';
    const jobType = data.get('jobType') || '';
    const message = data.get('message') || '';

    const body = [
      'Name: ' + name,
      'Phone: ' + phone,
      'Job type: ' + jobType,
      '',
      'Message:',
      message,
      '',
      'Photos/drawings can be attached to this email before sending.'
    ].join('\n');

    const mailto = 'mailto:info@binxindustries.com.au?subject=' + encodeURIComponent('Quote request - BINX Industries') + '&body=' + encodeURIComponent(body);
    window.location.href = mailto;
  });
}
