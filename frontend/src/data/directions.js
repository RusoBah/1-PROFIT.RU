import devIcon from '@/assets/icons/direction/direction-dev.png'
import integrationIcon from '@/assets/icons/direction/direction-integration.png'
import supportIcon from '@/assets/icons/direction/direction-support.png'

export const directions = [
  {
    id: 1,
    icon: devIcon,
    title: 'Разработка и кастомизация',
    description:
      'Создаем или расширяем конфигурации 1С под специфику вашего бизнеса. От дополнительных подсистем и отчетов до интеграций с внешними системами. Адаптируем типовые решения так, чтобы они работали именно на вас.',
    buttonText: 'Обсудить проект',
  },
  {
    id: 2,
    icon: integrationIcon,
    title: 'Интеграция и миграция данных',
    description:
      'Объединяем разрозненные системы в единую экосистему. Переносим данные между версиями, интегрируем 1С с сайтами, интернет-магазинами, API и базами данных.',
    buttonText: 'Получить план миграции',
  },
  {
    id: 3,
    icon: supportIcon,
    title: 'Техническая поддержка и обслуживание',
    description:
      'Постоянная забота о вашей системе. Мониторим, обновляем, оптимизируем. Оперативно решаем проблемы, консультируем команду и помогаем масштабировать бизнес.',
    buttonText: 'Узнать о тарифах поддержки',
  },
]
