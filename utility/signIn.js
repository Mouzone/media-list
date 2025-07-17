const { createClient } = window.supabase;

const supabase = createClient(
	"https://mhdeybfxcebumtjpurby.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oZGV5YmZ4Y2VidW10anB1cmJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MzYwMDIsImV4cCI6MjA2ODExMjAwMn0.GL78FfZ0Wgad8sHZ2sv9pVDdW03u6gYTRud-AVhl580"
);

async function signInWithEmail(email, password) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	console.log(data, error);
}
