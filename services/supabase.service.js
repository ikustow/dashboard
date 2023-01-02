const { createClient } = require('@supabase/supabase-js')
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(
    supabaseUrl,
    supabaseKey
)

class SupabaseService {
    constructor() {
    }
    async getUserMainGoals() {
       return supabase.from('UserMainGoals').select();
    }
    async getUserProgress() {
        return supabase.from('LearningProgress').select();
    }
    async getRandomWord() {
        return supabase.from('RandomWord').select();
    }

}
module.exports = new SupabaseService()

