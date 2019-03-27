export const files = [
    {
      name: 'home',
      type: '/home'
    },
    {
      name: 'client',
      type: '/client',
      children: [
        {
          name: 'mon compte',
          type: '/client/moncompte'
        }
      ]
    },
    {
      name: 'admin',
      type: '/admin',
      children: [
        { name: 'ajouter un client', type: 'admin/addclient' },
        { name: 'ajouter un cours', type: 'admin' }
      ]
    }
  ];