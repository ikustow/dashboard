const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://bluchzwajzpsbbcdyrxg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsdWNoendhanpwc2JiY2R5cnhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgwMDU5NDYsImV4cCI6MTk3MzU4MTk0Nn0.ti0V1Nf8CDNK2Y9wtgMzwCxp2EzStpPs9rQBVz85OZY'

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

