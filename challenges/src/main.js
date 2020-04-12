import Github from './Github'
import getUserFromGithub from './getUserFromGithub'
import printThreeMessagesWithDelay from './printThreeMessagesWithDelay'

// Call delay function 3 times
printThreeMessagesWithDelay()

// Get users from Github
getUserFromGithub('diego3g')
getUserFromGithub('diego3g124123')

// Get repositories
Github.getRepositories('rocketseat/rocketseat.com.br')
Github.getRepositories('rocketseat/dslkvmskv')
