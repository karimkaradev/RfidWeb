export const files = [
    {
      name: 'home',
      type: '',
      children: [
        {
          name: 'nos cours',
          type: '/home/cours'
        },
        {
          name: 'les abonnements',
          type: '/home/abonnements'
        }
      ]
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
    },
    {
      name: 'test',
      type: '/test'
    }
  ];
  export const files2 = [
    {
      name: 'home',
      type: '',
      children: [
        {
          name: 'nos cours',
          type: '/home/cours'
        },
        {
          name: 'les abonnements',
          type: '/home/abonnements'
        }
      ]
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
    },
    {
      name: 'test',
      type: '/test',
      children: [
        { name: 'ajouter un client', type: 'admin/addclient' },
        { name: 'ajouter un cours', type: 'admin' }
      ]
    }
  ];