interface IItem {
  title: string
  link: string
}

export const items:IItem[] = [
  {
    title: 'Расписание',
    link: '/schedule'
  },
  {
    title: 'Наши преподаватели',
    link: '/teachers'
  },
  {
    title: 'Телефонный справочник',
    link: '/directory'
  }
]
