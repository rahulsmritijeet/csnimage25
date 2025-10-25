import requests

# Mapping of event names to Picsum URLs
eventBackgrounds = {
      'Symphony': 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80',
  'Nrityanjali (Fusion Dance)': 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=1920&q=80',
  'Sur Sangam (Music - a Universal Language)': 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&q=80',
  'Kitchen Geniuses': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80',
  'ELAN: The Pulse Within (Western Dance Competition)': 'http://googleusercontent.com/image_collection/image_retrieval/11525387610516230962_0',
  'नुक्कड़ नाटक (एक सामंजस्यपूर्ण राष्ट्र)': 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=1920&q=80',

  'TED Talk': 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920&q=80',
  'बातों - बातों में (हिन्दी पॉडकास्ट)': 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1920&q=80',
  'Flights of Poetic Fantasy (Poetry Writing Competition)': 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80',
  'संस्कृत श्लोक गायन': 'https://images.unsplash.com/photo-1609234656388-0ff363383899?w=1920&q=80',


  'Reimagine and Recreate (Chitrashala Jr. A)': 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&q=80',
  'Paper Montage (Chitrashala Jr. B)': 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=1920&q=80',
  'Canvas Painting (Chitrashala Jr. C)': 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1920&q=80',
 'Indian Renaissance Impact (Aesthetic Moves Sr. A)': 'http://googleusercontent.com/image_collection/image_retrieval/15774337883456951004_0',
  'Statuette (Aesthetic Moves Sr. B)': 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=1920&q=80',
  'Impressionist Landscape (Aesthetic Moves Sr. C)': 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=1920&q=80',
  'Aesthetical Expression (Aesthetic Moves Sr. D)': 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=1920&q=80',


  'GameCraft': 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&q=80',
  'Webolution': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&q=80',
  'CrypteX': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80',
  'ChemCraft 3D': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&q=80',
  'Vista View': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
  'Rube It Up!': 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=1920&q=80',
  'EcoInnovators': 'http://googleusercontent.com/image_collection/image_retrieval/7545742703770936758_0',
  'Reel Harmony': 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1920&q=80',
  'GameSpark': 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&q=80',
  'Top Coders': 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1920&q=80',
  'IQrypt (Science & Technology Quiz)': 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=1920&q=80',

  'Bid Blitz': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80',
  'Think Tank': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80',
}

for name, url in eventBackgrounds.items():
    # Clean the filename to avoid spaces & special chars
    filename = name.replace(" ", "_").replace("(", "").replace(")", "") + ".jpg"
    response = requests.get(url)
    if response.status_code == 200:
        with open(filename, 'wb') as f:
            f.write(response.content)
        print(f"Downloaded {filename}")
    else:
        print(f"Failed to download {filename}")
