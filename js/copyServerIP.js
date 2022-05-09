function copy() {
    navigator.clipboard.writeText(ip2);


Swal.fire({
    title: 'IP copied.',
    text: 'The server IP has been copied!',
    'icon': 'success',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/NetheriteBlock.png)',
    backdrop: `
      rgba(0,0,123,0.4)
    `
  })
}