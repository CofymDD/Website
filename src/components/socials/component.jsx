import { Icon } from '@iconify/react'

function Socials() {
    return (
        <div className='grid grid-cols-2 gap-1 place-items-center text-lg sm:grid-cols-3'>
            <a
                className='px-3 py-2 inline-flex items-center justify-center rounded transition duration-500 ease-in-out text-sky-300 hover:drop-shadow-telegram'
                href='https://t.me/cofymdd/'
                target='_blank'
                rel='noreferrer'
            >
                <Icon className='w-4 h-4 mr-2' icon='mingcute:telegram-fill' />
                <span>Telegram</span>
            </a>

            <a
                className='px-3 py-2 inline-flex items-center justify-center rounded transition duration-500 ease-in-out text-pink-400 hover:drop-shadow-instagram'
                href='https://instagram.com/cofymdd.ft/'
                target='_blank'
                rel='noreferrer'
            >
                <Icon className='w-4 h-4 mr-2' icon='fa-brands:instagram' />
                <span>Instagram</span>
            </a>

            <a
                className='px-3 py-2 inline-flex items-center justify-center rounded transition duration-500 ease-in-out text-indigo-400 hover:drop-shadow-discord'
                href='https://discordapp.com/users/419440355180544001/'
                target='_blank'
                rel='noreferrer'
            >
                <Icon className='w-4 h-4 mr-2' icon='fa-brands:discord' />
                <span>Discord</span>
            </a>

            <a
                className='px-3 py-2 inline-flex items-center justify-center rounded transition duration-500 ease-in-out text-purple-400 hover:drop-shadow-twitch'
                href='https://twitch.tv/cofymdd/'
                target='_blank'
                rel='noreferrer'
            >
                <Icon className='w-4 h-4 mr-2' icon='fa-brands:twitch' />
                <span>Twitch</span>
            </a>

            <a
                className='px-3 py-2 inline-flex items-center justify-center rounded transition duration-500 ease-in-out text-rose-300 hover:drop-shadow-applemusic'
                href='https://music.apple.com/profile/cofymdd/'
                target='_blank'
                rel='noreferrer'
            >
                <Icon className='w-4 h-4 mr-2' icon='fa-brands:apple' />
                <span>Apple Music</span>
            </a>

            <a
                className='px-3 py-2 inline-flex items-center justify-center rounded transition duration-500 ease-in-out text-red-400 hover:drop-shadow-youtube'
                href='https://youtube.com/@cofymdd1173/'
                target='_blank'
                rel='noreferrer'
            >
                <Icon className='w-4 h-4 mr-2' icon='fa-brands:youtube' />
                <span>YouTube</span>
            </a>

            <a
                className='px-3 py-2 inline-flex items-center justify-center rounded transition duration-500 ease-in-out text-gray-100 hover:drop-shadow-steam'
                href='https://steamcommunity.com/id/CofymDD/'
                target='_blank'
                rel='noreferrer'
            >
                <Icon className='w-4 h-4 mr-2' icon='fa-brands:steam-symbol' />
                <span>Steam</span>
            </a>

            <a
                className='px-3 py-2 inline-flex items-center justify-center rounded transition duration-500 ease-in-out text-gray-100 hover:drop-shadow-wakatime'
                href='https://wakatime.com/@CofymDD/'
                target='_blank'
                rel='noreferrer'
            >
                <Icon className='w-4 h-4 mr-2' icon='simple-icons:wakatime' />
                <span>Wakatime</span>
            </a>

            <a
                className='px-3 py-2 inline-flex items-center justify-center rounded transition duration-500 ease-in-out text-gray-100 hover:drop-shadow-github'
                href='https://github.com/CofymDD/'
                target='_blank'
                rel='noreferrer'
            >
                <Icon className='w-4 h-4 mr-2' icon='fa-brands:github' />
                <span>GitHub</span>
            </a>

            <a className='hidden sm:block'></a>

            <a
                className='inline-flex items-center justify-center px-3 py-2 rounded transition duration-500 ease-in-out text-pink-400 hover:drop-shadow-osu'
                href='https://osu.ppy.sh/users/22038537/'
                target='_blank'
                rel='noreferrer'
            >
                <Icon className='w-4 h-4 mr-2' icon='fa:dot-circle-o' />
                <span>osu!profile</span>
            </a>
        </div>
    )
}

export default Socials
