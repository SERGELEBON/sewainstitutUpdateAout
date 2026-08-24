interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '2000+', label: 'Étudiants formés' },
  { value: '8+', label: "Années d'expérience" },
  { value: '95%', label: 'Taux de réussite' },
  { value: '100%', label: 'Accrédité' },
]

export function Stats() {
  return (
    <div className='bg-primary py-16'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
          {stats.map(stat => (
            <div key={stat.label} className='text-center'>
              <p className='text-4xl font-bold text-white lg:text-5xl'>{stat.value}</p>
              <p className='mt-2 text-sm text-white/90 lg:text-base'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
