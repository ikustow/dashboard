const supabaseService = require('../services/supabase.service')


class DashboardController {
    async getDailyTasks(req, res) {
        const dailyTasks = await supabaseService.getUserMainGoals()
        res.json(dailyTasks.data)
    }

    async getCurrentProgress(req, res) {
        const progressValue = await supabaseService.getUserProgress()
        res.json(progressValue.data)
    }

    async getPromotions(req, res) {
    }
    async getRandomWord(req, res)  {
        const randomWord = await supabaseService.getRandomWord()
        res.json(randomWord.data)
    }
    async refreshRandomWord(req, res) {
        const randomWord = await supabaseService.getRandomWord()
        res.json(randomWord.data)
    }

    async calculateProgress(data){

        return data
    }
}

module.exports = new DashboardController()