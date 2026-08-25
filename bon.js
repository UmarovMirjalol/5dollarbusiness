/**
 * BON! TACHKENT — FLAGSHIP DIGITAL EXPERIENCE JAVASCRIPT
 * Boulangerie & Café Parisien · Est. 2008
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     01. DATA REPOSITORIES (GENUINE BON! TASHKENT MENU & LOCATIONS)
     ========================================================================== */

  const MENU_DATABASE = {
    viennoiserie: [
      {
        name: 'Croissant au Beurre',
        french: 'Pur beurre de baratte AOP',
        desc: 'Our flagship 27-layer laminated puff pastry, baked each morning. Flaky golden shell with an airy, honeycomb interior.',
        price: '22 000 UZS',
        rawPrice: 22000,
        diet: 'Pure Butter',
        category: 'pastry'
      },
      {
        name: 'Pain au Chocolat',
        french: 'Deux barres de chocolat noir 55%',
        desc: 'Crisp laminated pastry folded around rich batons of bittersweet French chocolate that melt gently when served warm.',
        price: '26 000 UZS',
        rawPrice: 26000,
        diet: 'House Classic',
        category: 'pastry'
      },
      {
        name: 'Croissant aux Amandes',
        french: 'Crème frangipane & amandes effilées',
        desc: 'Twice-baked butter croissant filled with almond frangipane cream, topped with toasted sliced almonds and powdered sugar.',
        price: '32 000 UZS',
        rawPrice: 32000,
        diet: 'Gourmet',
        category: 'pastry'
      },
      {
        name: 'Kouign-Amann Artisanal',
        french: 'Spécialité bretonne caramélisée',
        desc: 'Caramelized Breton butter cake with a salted crunch exterior and tender, buttery layers inside.',
        price: '28 000 UZS',
        rawPrice: 28000,
        diet: 'Brittany Recipe',
        category: 'pastry'
      },
      {
        name: 'Brioche Tressée au Sucre',
        french: 'Pâte levée au beurre et perles de sucre',
        desc: 'Soft, golden braided brioche enriched with farm eggs and butter, finished with crunchy sugar pearls.',
        price: '24 000 UZS',
        rawPrice: 24000,
        diet: 'Morning Comfort',
        category: 'pastry'
      },
      {
        name: 'Chausson aux Pommes',
        french: 'Compotée de pommes fraîches à la cannelle',
        desc: 'Turnover pastry filled with slow-stewed spiced apple compote wrapped in scoring-patterned golden crust.',
        price: '26 000 UZS',
        rawPrice: 26000,
        diet: 'Fruit Craft',
        category: 'pastry'
      }
    ],

    dejeuner: [
      {
        name: 'Galette de Sarrasin Complète',
        french: 'Blé noir, dinde fumée, emmental & œuf',
        desc: 'Traditional Brittany buckwheat crepe filled with turkey ham, melted Emmental cheese, sunny egg, and fresh rocket.',
        price: '58 000 UZS',
        rawPrice: 58000,
        diet: 'Gluten-Free Flour',
        category: 'plat'
      },
      {
        name: 'Gazpacho Andalou aux Amandes',
        french: 'Tomates fraîches, tomates séchées & amandes',
        desc: 'Chilled ripe summer tomato soup garnished with sun-dried tomatoes, toasted almond flakes, and extra virgin olive oil.',
        price: '38 000 UZS',
        rawPrice: 38000,
        diet: 'Refreshing & Light',
        category: 'plat'
      },
      {
        name: 'Salade Bon! au Parmesan',
        french: 'Jeunes pousses, copeaux de parmesan & agrumes',
        desc: 'Crisp field greens, shaved aged parmesan, toasted seeds, and house French vinaigrette on branded Bon! porcelain.',
        price: '48 000 UZS',
        rawPrice: 48000,
        diet: 'Vegetarian',
        category: 'plat'
      },
      {
        name: 'Quiche Lorraine Tradition',
        french: 'Lardons, crème fraîche & pâte brisée',
        desc: 'Rich savory custard pie baked in a buttery shortcrust pastry with turkey bacon and caramelized onions.',
        price: '45 000 UZS',
        rawPrice: 45000,
        diet: 'Bistro Classic',
        category: 'plat'
      },
      {
        name: 'Tartine Saumon & Avocat',
        french: 'Pain de campagne au levain, saumon gravlax',
        desc: 'Grilled country sourdough topped with smashed avocado, citrus cured salmon, poached egg, and caper berries.',
        price: '62 000 UZS',
        rawPrice: 62000,
        diet: 'All-Day Brunch',
        category: 'plat'
      },
      {
        name: 'Croque-Monsieur au Four',
        french: 'Béchamel onctueuse, emmental gratiné',
        desc: 'Toasted brioche sandwich layered with velvety béchamel sauce, turkey ham, and gratinated golden cheese crust.',
        price: '52 000 UZS',
        rawPrice: 52000,
        diet: 'Parisian Bistro',
        category: 'plat'
      }
    ],

    patisserie: [
      {
        name: 'Mille-Feuille Vanille Bourbon',
        french: 'Feuilletage inversé, crème diplomate',
        desc: 'Three crisp caramelized puff pastry layers with velvety Madagascar vanilla diplomate cream and classic feathered fondant glaze.',
        price: '38 000 UZS',
        rawPrice: 38000,
        diet: 'Masterpiece',
        category: 'sweet'
      },
      {
        name: 'Éclair Chocolat Guanaja',
        french: 'Pâte à choux, ganache grand cru 70%',
        desc: 'Crisp choux pastry shell filled with intense dark chocolate cream and glossy dark chocolate mirror glaze.',
        price: '32 000 UZS',
        rawPrice: 32000,
        diet: 'Pure Cacao',
        category: 'sweet'
      },
      {
        name: 'Tartelette Framboises Fraîches',
        french: 'Pâte sablée, crème d\'amande & fruits rouges',
        desc: 'Crisp sweet pastry shell filled with silky vanilla crème pâtissière and piled high with fresh raspberries.',
        price: '42 000 UZS',
        rawPrice: 42000,
        diet: 'Fresh Berry',
        category: 'sweet'
      },
      {
        name: 'Gâteau Opéra Classique',
        french: 'Biscuit joconde, ganache café & chocolat',
        desc: 'Thin almond sponge cake soaked in coffee syrup, layered with dark chocolate ganache and French coffee buttercream.',
        price: '52 000 UZS',
        rawPrice: 52000,
        diet: 'French Icon',
        category: 'sweet'
      },
      {
        name: 'Paris-Brest Praliné',
        french: 'Couronne de choux, crème mousseline noisette',
        desc: 'Ring of choux pastry filled with rich roasted hazelnut praline mousseline cream and topped with toasted almond flakes.',
        price: '40 000 UZS',
        rawPrice: 40000,
        diet: 'Praliné Craft',
        category: 'sweet'
      },
      {
        name: 'Choux à la Crème Chantilly',
        french: 'Chou croustillant, vanille naturelle',
        desc: 'Delicate choux pastry filled with light whipped vanilla cream and dusted with confectioners\' sugar.',
        price: '26 000 UZS',
        rawPrice: 26000,
        diet: 'Airy & Light',
        category: 'sweet'
      }
    ],

    boissons: [
      {
        name: 'Cappuccino Signature Bon!',
        french: 'Double espresso & micromousse soyeuse',
        desc: 'Double shot of single origin Arabica coffee pulled into authentic Bon! porcelain cup, topped with velvety steamed milk latte art.',
        price: '28 000 UZS',
        rawPrice: 28000,
        diet: 'House Signature',
        category: 'drink'
      },
      {
        name: 'Espresso Double Origine',
        french: 'Extraction pure 25 secondes',
        desc: 'Concentrated double shot with rich golden-brown crema, highlighting notes of toasted hazelnut, cacao, and subtle stone fruit.',
        price: '20 000 UZS',
        rawPrice: 20000,
        diet: '100% Arabica',
        category: 'drink'
      },
      {
        name: 'Iced Cold Brew Citrus Tonic',
        french: 'Extraction froide 18h & zeste d\'orange',
        desc: 'Slow cold brewed coffee poured over sparkling tonic water with ice and fresh orange peel in crystal glassware.',
        price: '34 000 UZS',
        rawPrice: 34000,
        diet: 'Iced & Vibrant',
        category: 'drink'
      },
      {
        name: 'Matcha Pistachio Latte',
        french: 'Matcha de cérémonie & crème de pistache',
        desc: 'Ceremonial Japanese Uji green tea whisked with silky oat milk and natural pistachio paste.',
        price: '44 000 UZS',
        rawPrice: 44000,
        diet: 'Specialty Drink',
        category: 'drink'
      },
      {
        name: 'Chocolat Chaud Grand Cru',
        french: 'Chocolat fondu à l\'ancienne',
        desc: 'Thick traditional French hot drinking chocolate made from melted bittersweet cacao and whole milk.',
        price: '36 000 UZS',
        rawPrice: 36000,
        diet: 'Rich & Warm',
        category: 'drink'
      },
      {
        name: 'Infusion Fruits Rouges & Menthe',
        french: 'Thé artisanal en théière de porcelaine',
        desc: 'Loose leaf herbal infusion with wild forest berries, fresh mint sprigs, and mountain honey served in a porcelain pot.',
        price: '26 000 UZS',
        rawPrice: 26000,
        diet: 'Herbal & Floral',
        category: 'drink'
      }
    ]
  };

  const TABLE_DISHES = {
    galette: {
      badge: 'DISH FOCUS · 01',
      title: 'Galette de Sarrasin Complète',
      french: 'Crêpe artisanale de blé noir · Jambon de dinde, emmental fondu, œuf miroir & roquette',
      story: 'Authentic Brittany-style buckwheat galette folded into a warm savoury parcel. Crispy golden edges, served with farm fresh greens and olive oil on genuine Bon! porcelain.',
      service: 'All Day Brunch',
      price: '58 000 UZS',
      rawPrice: 58000,
      pairing: 'Pairs wonderfully with our double-shot Iced Espresso Tonic with citrus zest.'
    },
    gazpacho: {
      badge: 'DISH FOCUS · 02',
      title: 'Gazpacho Andalou aux Amandes',
      french: 'Soupe froide de tomates mûres, tomates confites, amandes effilées & huile d\'olive',
      story: 'Velvety chilled tomato soup infused with garlic and sherry vinegar. Topped with dried sun-kissed cherry tomatoes and toasted flaked almonds for texture.',
      service: 'Lunch & Afternoon',
      price: '38 000 UZS',
      rawPrice: 38000,
      pairing: 'Complements a freshly baked warm baguette crouton and iced mint tea.'
    },
    salad: {
      badge: 'DISH FOCUS · 03',
      title: 'Salade Gourmande au Parmesan',
      french: 'Mélange de jeunes pousses, copeaux de parmesan affiné, carottes & vinaigrette maison',
      story: 'Vibrant local greens tossed in light French mustard vinaigrette, crowned with generous shavings of 24-month aged parmesan cheese.',
      service: 'All Day Dining',
      price: '48 000 UZS',
      rawPrice: 48000,
      pairing: 'Pairs naturally with a hot butter croissant or quiche lorraine.'
    },
    coffee: {
      badge: 'DISH FOCUS · 04',
      title: 'Café Tonic & Layered Cold Brew',
      french: 'Double espresso coulé sur glace et tonic artisanal, zeste d\'agrume',
      story: 'Layered presentation in conical glassware with a bright crema layer atop sparkling tonic. Delivers crisp refreshing citrus notes and clean coffee depth.',
      service: 'Atelier Bariste',
      price: '34 000 UZS',
      rawPrice: 34000,
      pairing: 'The quintessential refreshment alongside a warm Galette or almond croissant.'
    }
  };

  const LOCATIONS_DATABASE = [
    // TASHKENT
    { id: 'temur-72', city: 'Tashkent', name: 'BON! Amir Temur 72A', address: 'Amir Temur Avenue 72A, Tashkent', phone: '+998 71 200 30 01', hours: '08:00 – 23:00', vibe: 'Central Avenue Bistro', desc: 'Centrally located on Amir Temur Avenue, this bustling cafe is a perfect spot for quick espresso stops, business meetings, and morning Viennoiserie.', img: 'product_coffee.jpg' },
    { id: 'beruni-12', city: 'Tashkent', name: 'BON! Beruni 12', address: 'Beruni Street 12, Tashkent', phone: '+998 71 200 30 02', hours: '08:00 – 23:00', vibe: 'Cozy Residential Cafe', desc: 'Nestled in the residential district of Beruni, offering warm Parisian vibes, quiet weekend brunches, and fresh daily baguettes.', img: 'intro_editorial.jpg' },
    { id: 'katartal-28', city: 'Tashkent', name: 'BON! Katartal 28', address: 'Katartal Street 28, Tashkent', phone: '+998 71 200 30 03', hours: '08:00 – 23:00', vibe: 'Neighborhood Gathering Hub', desc: 'A lively neighborhood café serving pure butter pastries, fresh salads, and premium coffee to the local community.', img: 'hero_cafe.jpg' },
    { id: 'sayokhat-2', city: 'Tashkent', name: 'BON! Sayokhat 2', address: 'Sayokhat Street 2, Tashkent', phone: '+998 71 200 30 04', hours: '08:00 – 23:00', vibe: 'Leafy Corner Salon', desc: 'Enjoy slow mornings with our buckwheat galettes and cold brew drinks in this sunny and welcoming avenue corner.', img: 'product_desserts.jpg' },
    { id: 'istikbol-18', city: 'Tashkent', name: 'BON! Istikbol 18', address: 'Istikbol Street 18, Tashkent', phone: '+998 71 200 30 05', hours: '08:00 – 23:00', vibe: 'Creative District Corner', desc: 'A meeting hub for artists and professionals, offering a beautiful selection of fine pastries and specialty coffees.', img: 'bon_table_spread.png' },
    { id: 'ukchi-5', city: 'Tashkent', name: 'BON! Ukchi 5', address: 'Ukchi Street 5, Tashkent', phone: '+998 71 200 30 06', hours: '08:00 – 23:00', vibe: 'Modern Business Quarter', desc: 'Boasting a sleek, contemporary layout with fast WiFi, comfortable seating, and premium lunch options.', img: 'product_coffee.jpg' },
    { id: 'malik-3', city: 'Tashkent', name: 'BON! Timur Malik 3', address: 'Timur Malik Street 3, Tashkent', phone: '+998 71 200 30 07', hours: '08:00 – 22:00', vibe: 'Charming Eastside Bakery', desc: 'A lovely corner shop supplying the local neighborhood with golden croissants, baguettes, and fresh cakes.', img: 'product_croissant.jpg' },
    { id: 'mashara-64', city: 'Tashkent', name: 'BON! Mashara 64', address: 'Mashara Street 64, Tashkent', phone: '+998 71 200 30 08', hours: '08:00 – 22:00', vibe: 'Quiet Suburban Haven', desc: 'Escape the city rush at this serene residential sanctuary, perfect for afternoon tea and warm brioches.', img: 'intro_editorial.jpg' },
    { id: 'ipak-44', city: 'Tashkent', name: 'BON! Buyuk Ipak Yuli 44', address: 'Buyuk Ipak Yuli 44, Tashkent', phone: '+998 71 200 30 09', hours: '08:00 – 23:00', vibe: 'Vibrant Tree-lined Boulevard', desc: 'Located on the historic Buyuk Ipak Yuli, boasting comfortable street-front terrace tables and classic bistro flooring.', img: 'hero_cafe.jpg' },
    { id: 'donish-80', city: 'Tashkent', name: 'BON! Akhmad Donish 80', address: 'Akhmad Donish Street 80, Tashkent', phone: '+998 71 200 30 10', hours: '08:00 – 22:00', vibe: 'High-street Pâtisserie', desc: 'Elegant, modern conservatory layout showcasing our complete range of handmade éclairs, tarts, and custom cakes.', img: 'product_desserts.jpg' },
    { id: 'chimkent-21', city: 'Tashkent', name: 'BON! Chimkent 21', address: 'Chimkent Street 21, Tashkent', phone: '+998 71 200 30 11', hours: '08:00 – 23:00', vibe: 'Bustling City Passageway', desc: 'Centrally located and popular, offering fresh salads, savory quiches, and artisan coffee to the business quarter.', img: 'bon_table_spread.png' },
    { id: 'fidokor-40', city: 'Tashkent', name: 'BON! Fidokor 40', address: 'Fidokor Street 40, Tashkent', phone: '+998 71 256 12 34', hours: '08:00 – 23:00', vibe: 'Quiet Expat Quarter & Reading Room', desc: 'A serene hideaway near Chekhov street. Wicker chairs, bookshelves, and natural sunlight make it ideal for slow morning reflections.', img: 'hero_cafe.jpg' },
    { id: 'rustaveli-63', city: 'Tashkent', name: 'BON! Shota Rustaveli 63', address: 'Shota Rustaveli Street 63, Tashkent', phone: '+998 71 253 00 00', hours: '08:00 – 23:00', vibe: 'Iconic Flagship Terrace', desc: 'Tashkent\'s original French café home. Plane trees shading the wide terrace, where guests enjoy croissants straight from the early morning ovens.', img: 'intro_editorial.jpg' },
    { id: 'shevchenko-30', city: 'Tashkent', name: 'BON! Taras Shevchenko 30', address: 'Taras Shevchenko Street 30, Tashkent', phone: '+998 71 252 88 99', hours: '08:00 – 23:00', vibe: 'Vibrant Pedestrian Bistro', desc: 'A lively bistro on Shevchenko pedestrian boulevard. A favorite meeting spot with gorgeous terrace seating.', img: 'product_coffee.jpg' },
    { id: 'navoi-22', city: 'Tashkent', name: 'BON! Alisher Navoi 22', address: 'Alisher Navoi Avenue 22, Tashkent', phone: '+998 71 200 30 12', hours: '08:00 – 22:00', vibe: 'Grand Avenue Salon', desc: 'Perfect downtown rest stop offering sweet afternoons, fresh fruit tarts, and organic coffee blends.', img: 'product_desserts.jpg' },
    { id: 'zargarlik-10a', city: 'Tashkent', name: 'BON! Zargarlik 10A', address: 'Zargarlik Street 10A, Tashkent', phone: '+998 71 200 30 13', hours: '08:00 – 22:00', vibe: 'Neighborhood Pastry Stop', desc: 'Welcoming neighborhood spot supplying fresh pastries, croissants, and artisan hot chocolates.', img: 'product_croissant.jpg' },
    { id: 'tepamashid-1', city: 'Tashkent', name: 'BON! Tepamashid 1', address: 'Tepamashid Street 1, Tashkent', phone: '+998 71 200 30 14', hours: '08:00 – 22:00', vibe: 'Cozy Botanical Nook', desc: 'A peaceful location decorated with lush indoor plants, offering exceptional coffee and pastries.', img: 'intro_editorial.jpg' },
    { id: 'akkurgan-31a', city: 'Tashkent', name: 'BON! Akkurgan (Onyx BC)', address: 'Akkurgan Street 31A, Onyx Business Center, Tashkent', phone: '+998 71 200 30 15', hours: '08:00 – 22:00', vibe: 'Polished Corporate Corner', desc: 'A bright, glass-walled space in Onyx Business Center, serving quick premium lunches and gourmet treats.', img: 'bon_table_spread.png' },
    { id: 'babur-6', city: 'Tashkent', name: 'BON! Next Mall', address: 'Babur Street 6, Next Mall, Tashkent', phone: '+998 71 200 30 16', hours: '08:00 – 23:00', vibe: 'Lively Promenade Café', desc: 'A perfect shopping break serving fresh fruit tarts, house macarons, and signature iced coffee tonic.', img: 'bon_seasonal_drinks.png' },
    { id: 'sayram-26', city: 'Tashkent', name: 'BON! Sayram 26', address: 'Sayram Street 26, Tashkent', phone: '+998 71 200 30 17', hours: '08:00 – 23:00', vibe: 'Greenhouse conservatory', desc: 'Lush botanical garden setting with glass panes, creating a warm, light-filled environment for family brunch.', img: 'hero_cafe.jpg' },
    { id: 'babur-174', city: 'Tashkent', name: 'BON! Babur 174', address: 'Babur Street 174, Tashkent', phone: '+998 71 200 30 18', hours: '08:00 – 22:00', vibe: 'Parkside Morning Oasis', desc: 'Stop by for hot croissants and fresh espresso before enjoying a slow stroll in Bobur Park.', img: 'product_croissant.jpg' },
    { id: 'nuroniylar-2', city: 'Tashkent', name: 'BON! Nuroniylar 2', address: 'Nuroniylar Street 2, Tashkent', phone: '+998 71 200 30 19', hours: '08:00 – 22:00', vibe: 'Leafy Boulevard Confectionery', desc: 'A tranquil environment surrounded by green trees, perfect for reading, sketching, and savoring classic macarons.', img: 'product_desserts.jpg' },
    { id: 'temur-118a', city: 'Tashkent', name: 'BON! Amir Timur 118A', address: 'Amir Timur Avenue 118A, Tashkent', phone: '+998 71 200 30 20', hours: '08:00 – 22:00', vibe: 'Spacious high-street Salon', desc: 'Featuring beautiful seating arrangements and a wide range of bakery items, perfect for small team events.', img: 'bon_table_spread.png' },
    { id: 'glinka-19', city: 'Tashkent', name: 'BON! Glinka 19', address: 'Glinka Street 19, Tashkent', phone: '+998 71 200 30 21', hours: '08:00 – 22:00', vibe: 'Quiet Historic Alley Bistro', desc: 'Charming retro-inspired layout serving classic breakfast plates, baguettes, and fresh hot coffees.', img: 'intro_editorial.jpg' },
    { id: 'lrr-26', city: 'Tashkent', name: 'BON! Little Ring Road 26', address: 'Little Ring Road 26, Tashkent', phone: '+998 71 200 30 22', hours: '08:00 – 22:00', vibe: 'Highway Rest Stop', desc: 'Convenient traveler stop with easy parking, supplying fresh pastries and hot double espressos.', img: 'product_coffee.jpg' },
    { id: 'beshagach-124', city: 'Tashkent', name: 'BON! Status BC', address: 'Kichik Beshagach Street 124/1, Status Business Center, Tashkent', phone: '+998 71 200 30 23', hours: '08:00 – 22:00', vibe: 'Polished Business Lounge', desc: 'Elegant atrium interior in Status Business Center, ideal for hosting client calls and quick lunches.', img: 'bon_table_spread.png' },
    { id: 'riviera-4', city: 'Tashkent', name: 'BON! Riviera Mall', address: 'Nodira Street 4, Riviera Mall, Tashkent', phone: '+998 71 200 30 24', hours: '08:00 – 23:00', vibe: 'Canal-front botanical Cafe', desc: 'A bright glass atrium inside Riviera Mall, offering gorgeous views, hot pastries, and a welcoming botanical terrace.', img: 'bon_seasonal_drinks.png' },
    { id: 'sergeli', city: 'Tashkent', name: 'BON! Yangi Sergeli', address: 'Yangi Sergeli, Tashkent', phone: '+998 71 200 30 25', hours: '08:00 – 22:00', vibe: 'Lively neighborhood Hub', desc: 'Bringing Bon! French baking traditions to Sergeli residents, serving hot pastries and classic breakfasts.', img: 'product_croissant.jpg' },
    { id: 'karatosh-5a', city: 'Tashkent', name: 'BON! Samarqand Darvoza', address: 'Karatosh Street 5A, Samarqand Darvoza, Tashkent', phone: '+998 71 200 30 26', hours: '08:00 – 23:00', vibe: 'Shopping District Salon', desc: 'A popular stopover for shoppers, serving delicious fruit tarts, macarons, and warm croissants.', img: 'hero_cafe.jpg' },

    // OTHER CITIES
    { id: 'samarkand-24', city: 'Samarkand', name: 'BON! Samarkand', address: 'Amir Temur Street 24, Samarkand', phone: '+998 66 200 40 01', hours: '08:00 – 23:00', vibe: 'Silk Road Heritage Café', desc: 'Bringing Bon! boulangerie craft to the historic center of Samarkand. Spacious courtyard vibes and great espresso.', img: 'product_coffee.jpg' },
    { id: 'bukhara-4', city: 'Bukhara', name: 'BON! Bukhara', address: 'Bakhovuddin Naqshbandi Street 4, Bukhara', phone: '+998 65 200 40 02', hours: '08:00 – 23:00', vibe: 'Old City Confectionery', desc: 'A lovely rest stop right in the tourist heart of Bukhara, serving light meals, pastries, and cold coffee drinks.', img: 'intro_editorial.jpg' },
    { id: 'chirchiq-69', city: 'Chirchiq', name: 'BON! Chirchiq', address: 'Amir Temur Street 69, Chirchiq', phone: '+998 70 200 40 03', hours: '08:00 – 22:00', vibe: 'Cozy Valley Bistro', desc: 'Supplying fresh daily baguettes, French viennoiserie, and warm comforting coffee to Chirchiq.', img: 'hero_cafe.jpg' },
    { id: 'andijan-62b', city: 'Andijan', name: 'BON! Andijan (Navruz Mall)', address: 'Mashraba Street 62B, Navruz Shopping Center, Andijan', phone: '+998 74 200 40 04', hours: '08:00 – 22:00', vibe: 'Fergana Valley Pastry Shop', desc: 'Bringing our handcrafted éclairs, tarts, and artisan espresso blends to Andijan residents.', img: 'product_desserts.jpg' },
    { id: 'shymkent-13', city: 'Shymkent', name: 'BON! Shymkent (MegaPlanet)', address: 'Tauke Khan Avenue 13, MegaPlanet Shopping Center, Shymkent, Kazakhstan', phone: '+7 7252 200 500', hours: '10:00 – 22:00', vibe: 'International Mall Promenade', desc: 'Our classic French viennoiserie and espresso drinks served in the heart of Shymkent, Kazakhstan.', img: 'bon_seasonal_drinks.png' }
  ];

  /* ==========================================================================
     02. LIVE TASHKENT CLOCK & BAKERY OVEN ENGINE
     ========================================================================== */
  function updateTashkentClock() {
    // Current UTC time + 5 hours for Tashkent (UTC+5)
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const tashkentOffsetHours = 5;
    const tashkentDate = new Date(utcTime + (3600000 * tashkentOffsetHours));

    const hours = String(tashkentDate.getHours()).padStart(2, '0');
    const minutes = String(tashkentDate.getMinutes()).padStart(2, '0');
    const seconds = String(tashkentDate.getSeconds()).padStart(2, '0');
    const timeStr = `${hours}:${minutes}:${seconds}`;

    // Update Live displays
    const clockElem = document.getElementById('hero-clock-time');
    const topDisplay = document.getElementById('tashkent-time-display');
    const statusBanner = document.getElementById('bakery-status-banner');
    const ovenNote = document.getElementById('hero-oven-note');

    if (clockElem) clockElem.textContent = timeStr;
    if (topDisplay) topDisplay.textContent = `Tashkent ${hours}:${minutes}`;

    const currentHour = tashkentDate.getHours();
    let statusText = '';
    let ovenBatch = '';

    if (currentHour >= 6 && currentHour < 11) {
      statusText = 'Le Fournil: Fresh Viennoiserie Batch Out of the Oven';
      ovenBatch = 'Morning Batch · <strong>Hot & Crisp</strong>';
    } else if (currentHour >= 11 && currentHour < 15) {
      statusText = 'Le Midi: Savoury Buckwheat Galettes & Chilled Gazpacho';
      ovenBatch = 'Lunch Service · <strong>Galettes on Order</strong>';
    } else if (currentHour >= 15 && currentHour < 19) {
      statusText = 'L\'Heure du Goûter: Pâtisserie Fine, Éclairs & Café Signature';
      ovenBatch = 'Tea Time · <strong>Pastry Display Fresh</strong>';
    } else if (currentHour >= 19 && currentHour < 23) {
      statusText = 'Salon du Soir: Artisanal Infusions, Warm Brioches & Desserts';
      ovenBatch = 'Evening Salon · <strong>Open until 23:00</strong>';
    } else {
      statusText = 'Le Fournil s\'éveille: Night bakers preparing pure butter dough';
      ovenBatch = 'Ovens Warming · <strong>Opens 08:00</strong>';
    }

    if (statusBanner) statusBanner.textContent = statusText;
    if (ovenNote) ovenNote.innerHTML = ovenBatch;
  }

  setInterval(updateTashkentClock, 1000);
  updateTashkentClock();

  /* ==========================================================================
     03. INTERACTIVE MENU SALON (CATEGORY TABS & DYNAMIC RENDERING)
     ========================================================================== */
  const menuGrid = document.getElementById('menu-items-grid');
  const carteTabs = document.querySelectorAll('.carte-tab');

  function renderMenuCategory(category) {
    if (!menuGrid) return;
    const items = MENU_DATABASE[category] || [];

    menuGrid.style.opacity = '0';
    menuGrid.style.transform = 'translateY(8px)';

    setTimeout(() => {
      menuGrid.innerHTML = items.map(item => `
        <article class="menu-card" data-category="${category}">
          <div>
            <div class="card-top-row">
              <h3 class="card-dish-name">${item.name}</h3>
              <span class="card-price">${item.price}</span>
            </div>
            <p class="card-french-sub">${item.french}</p>
            <p class="card-desc">${item.desc}</p>
          </div>
          <div class="card-bottom-row">
            <span class="diet-pill">${item.diet}</span>
            <button class="btn-card-add" data-item="${item.name}" data-price="${item.rawPrice}" data-cat="${item.category}">
              <span>+ Add to Tray</span>
            </button>
          </div>
        </article>
      `).join('');

      menuGrid.style.transition = 'opacity 0.4s var(--ease-editorial), transform 0.4s var(--ease-editorial)';
      menuGrid.style.opacity = '1';
      menuGrid.style.transform = 'translateY(0)';

      // Re-attach add-to-tray listeners on newly created cards
      attachTrayAddListeners();
    }, 200);
  }

  carteTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      carteTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderMenuCategory(tab.dataset.category);
    });
  });

  // Initial render
  renderMenuCategory('viennoiserie');

  /* ==========================================================================
     04. TABLE SPREAD INTERACTIVE DISH INSPECTOR
     ========================================================================== */
  const dishPins = document.querySelectorAll('.dish-pin');
  const inspectorCard = document.getElementById('dish-inspector-card');
  const inspBadge = document.getElementById('inspector-badge');
  const inspTitle = document.getElementById('inspector-title');
  const inspFrench = document.getElementById('inspector-french');
  const inspStory = document.getElementById('inspector-story');
  const inspService = document.getElementById('inspector-service');
  const inspPrice = document.getElementById('inspector-price');
  const inspPairing = document.getElementById('inspector-pairing');
  const inspBtn = document.getElementById('btn-inspector-add');

  dishPins.forEach(pin => {
    pin.addEventListener('click', () => {
      dishPins.forEach(p => p.classList.remove('active'));
      pin.classList.add('active');

      const dishKey = pin.dataset.dish;
      const data = TABLE_DISHES[dishKey];
      if (!data || !inspectorCard) return;

      inspectorCard.style.opacity = '0.3';
      inspectorCard.style.transform = 'scale(0.98)';

      setTimeout(() => {
        if (inspBadge) inspBadge.textContent = data.badge;
        if (inspTitle) inspTitle.textContent = data.title;
        if (inspFrench) inspFrench.textContent = data.french;
        if (inspStory) inspStory.textContent = data.story;
        if (inspService) inspService.textContent = data.service;
        if (inspPrice) inspPrice.textContent = data.price;
        if (inspPairing) inspPairing.textContent = data.pairing;

        if (inspBtn) {
          inspBtn.dataset.item = data.title;
          inspBtn.dataset.price = data.rawPrice;
        }

        inspectorCard.style.opacity = '1';
        inspectorCard.style.transform = 'scale(1)';
      }, 150);
    });
  });

  /* ==========================================================================
     05. "MON PLATEAU" INTERACTIVE TRAY BUILDER
     ========================================================================== */
  const trayState = {
    pastry: { name: 'Croissant au Beurre', price: 22000 },
    drink: { name: 'Cappuccino Signature', price: 28000 },
    sweet: { name: 'Mille-Feuille Vanille', price: 38000 }
  };

  const trayOptions = document.querySelectorAll('.tray-option');
  const rPastryName = document.getElementById('r-pastry-name');
  const rPastryPrice = document.getElementById('r-pastry-price');
  const rDrinkName = document.getElementById('r-drink-name');
  const rDrinkPrice = document.getElementById('r-drink-price');
  const rSweetName = document.getElementById('r-sweet-name');
  const rSweetPrice = document.getElementById('r-sweet-price');
  const rTotalPrice = document.getElementById('r-total-price');

  function updateTrayReceipt() {
    if (rPastryName) rPastryName.textContent = trayState.pastry.name;
    if (rPastryPrice) rPastryPrice.textContent = `${trayState.pastry.price.toLocaleString('ru-RU')} UZS`;

    if (rDrinkName) rDrinkName.textContent = trayState.drink.name;
    if (rDrinkPrice) rDrinkPrice.textContent = `${trayState.drink.price.toLocaleString('ru-RU')} UZS`;

    if (rSweetName) rSweetName.textContent = trayState.sweet.name;
    if (rSweetPrice) rSweetPrice.textContent = `${trayState.sweet.price.toLocaleString('ru-RU')} UZS`;

    const total = trayState.pastry.price + trayState.drink.price + trayState.sweet.price;
    if (rTotalPrice) rTotalPrice.textContent = `${total.toLocaleString('ru-RU')} UZS`;
  }

  trayOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const type = opt.dataset.type;
      const group = opt.parentElement;
      if (group) {
        group.querySelectorAll('.tray-option').forEach(b => b.classList.remove('active'));
      }
      opt.classList.add('active');

      trayState[type] = {
        name: opt.dataset.name,
        price: parseInt(opt.dataset.price, 10)
      };

      updateTrayReceipt();
      showToast(`Added «${opt.dataset.name}» to your Bon! Tray`);
    });
  });

  function attachTrayAddListeners() {
    const addBtns = document.querySelectorAll('.btn-card-add, .btn-mini-add, #btn-inspector-add');
    addBtns.forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        const itemName = btn.dataset.item || 'Artisan Dish';
        const price = parseInt(btn.dataset.price || '0', 10);
        const cat = btn.dataset.cat || 'pastry';

        if (cat === 'plat' || cat === 'pastry') {
          trayState.pastry = { name: itemName, price: price };
        } else if (cat === 'boisson' || cat === 'drink') {
          trayState.drink = { name: itemName, price: price };
        } else if (cat === 'sweet') {
          trayState.sweet = { name: itemName, price: price };
        }

        updateTrayReceipt();
        showToast(`✨ «${itemName}» placed onto your Bon! Tray.`);

        // Subtle jump scroll hint if user wants to see their tray
        const traySection = document.getElementById('tray-builder');
        if (traySection && window.scrollY < traySection.offsetTop - 600) {
          // just toast
        }
      };
    });
  }

  // Save Tray / Share receipt
  const saveTrayBtn = document.getElementById('btn-save-tray');
  if (saveTrayBtn) {
    saveTrayBtn.addEventListener('click', () => {
      const total = trayState.pastry.price + trayState.drink.price + trayState.sweet.price;
      const summary = `🥐 Mon Plateau BON! Tashkent:\n1. ${trayState.pastry.name} (${trayState.pastry.price.toLocaleString('ru-RU')} UZS)\n2. ${trayState.drink.name} (${trayState.drink.price.toLocaleString('ru-RU')} UZS)\n3. ${trayState.sweet.name} (${trayState.sweet.price.toLocaleString('ru-RU')} UZS)\nTotal: ${total.toLocaleString('ru-RU')} UZS\n\nShow this ticket at Bon! Shota Rustaveli, Fidokor, or Shevchenko!`;
      
      if (navigator.clipboard) {
        navigator.clipboard.writeText(summary).then(() => {
          showToast('📋 Tray details copied! Ready to share or show barista.');
        });
      } else {
        showToast('📋 Tray ready! Show to your Bon! barista.');
      }
    });
  }

  /* ==========================================================================
     06. TASHKENT & REGIONAL LOCATIONS EXPLORER
     ========================================================================== */
  const locationsList = document.getElementById('locations-list');
  const cityFilterTabs = document.getElementById('city-filter-tabs');
  const detailTitle = document.getElementById('detail-title');
  const detailDesc = document.getElementById('detail-desc');
  const detailAddress = document.getElementById('detail-address');
  const detailPhone = document.getElementById('detail-phone');
  const detailVibe = document.getElementById('detail-vibe');
  const detailImg = document.getElementById('detail-img');
  const detailHoursBadge = document.getElementById('detail-hours-badge');
  const link2gis = document.getElementById('link-2gis');
  const linkYandex = document.getElementById('link-yandex');
  const btnCopyAddress = document.getElementById('btn-copy-address');

  function updateLocationDetail(id) {
    const data = LOCATIONS_DATABASE.find(loc => loc.id === id);
    if (!data) return;

    if (detailTitle) detailTitle.textContent = data.name;
    if (detailDesc) detailDesc.textContent = data.desc;
    if (detailAddress) detailAddress.textContent = data.address;
    if (detailPhone) detailPhone.textContent = data.phone;
    if (detailVibe) detailVibe.textContent = data.vibe;
    if (detailHoursBadge) detailHoursBadge.textContent = `Hours: ${data.hours}`;
    if (detailImg) detailImg.src = data.img;

    // Encode address for fallback link search
    const encAddr = encodeURIComponent(data.address);
    if (link2gis) {
      link2gis.href = `https://2gis.uz/tashkent/search/Bon!%20${encAddr}`;
    }
    if (linkYandex) {
      linkYandex.href = `https://yandex.uz/maps/10335/tashkent/search/Bon!%20${encAddr}/`;
    }
  }

  function clearLocationDetail() {
    if (detailTitle) detailTitle.textContent = 'Select a House';
    if (detailDesc) detailDesc.textContent = 'Please choose a Bon! café from the list to see address details, phone booking, and atmospheric notes.';
    if (detailAddress) detailAddress.textContent = '—';
    if (detailPhone) detailPhone.textContent = '—';
    if (detailVibe) detailVibe.textContent = '—';
    if (detailHoursBadge) detailHoursBadge.textContent = 'Hours: —';
    if (detailImg) detailImg.src = 'hero_cafe.jpg';
  }

  function renderLocations(selectedCity = 'All') {
    if (!locationsList) return;

    const filtered = LOCATIONS_DATABASE.filter(loc => {
      if (selectedCity === 'All') return true;
      return loc.city.toLowerCase() === selectedCity.toLowerCase();
    });

    locationsList.innerHTML = filtered.map((loc, index) => {
      const isActive = index === 0 ? 'active' : '';
      const isSelected = index === 0 ? 'true' : 'false';
      return `
        <article class="loc-card ${isActive}" data-loc-id="${loc.id}" tabindex="0" role="tab" aria-selected="${isSelected}">
          <div class="loc-card-top">
            <span class="loc-num">${String(index + 1).padStart(2, '0')} · ${loc.city.toUpperCase()}</span>
            <span class="loc-status-open"><span class="status-dot"></span> Open</span>
          </div>
          <h3 class="loc-name">${loc.name}</h3>
          <p class="loc-neighborhood">${loc.vibe}</p>
          <div class="loc-features">
            <span class="feat-tag">${loc.hours}</span>
          </div>
        </article>
      `;
    }).join('');

    if (filtered.length > 0) {
      updateLocationDetail(filtered[0].id);
    } else {
      clearLocationDetail();
    }

    attachLocationCardListeners();
  }

  function attachLocationCardListeners() {
    const cards = document.querySelectorAll('#locations-list .loc-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        cards.forEach(c => {
          c.classList.remove('active');
          c.setAttribute('aria-selected', 'false');
        });
        card.classList.add('active');
        card.setAttribute('aria-selected', 'true');
        updateLocationDetail(card.dataset.locId);
      });
    });
  }

  // Handle city tabs filter click
  if (cityFilterTabs) {
    const cityButtons = cityFilterTabs.querySelectorAll('.city-tab');
    cityButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        cityButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderLocations(btn.dataset.city);
      });
    });
  }

  if (btnCopyAddress) {
    btnCopyAddress.addEventListener('click', () => {
      const activeCard = document.querySelector('#locations-list .loc-card.active');
      const activeId = activeCard ? activeCard.dataset.locId : '';
      const activeData = LOCATIONS_DATABASE.find(l => l.id === activeId);
      const address = activeData ? activeData.address : 'Shota Rustaveli Street 63, Tashkent';

      if (navigator.clipboard) {
        navigator.clipboard.writeText(address).then(() => {
          showToast(`📍 Address copied: ${address}`);
        });
      } else {
        showToast(`📍 Address: ${address}`);
      }
    });
  }

  // Initial call to render all locations
  renderLocations('All');

  /* ==========================================================================
     07. WEBAUDIO AMBIENCE SYNTHESIZER (BESPOKE CAFÉ HARMONICS)
     ========================================================================== */
  let audioCtx = null;
  let isPlayingSound = false;
  let soundNodes = [];
  const soundToggleBtn = document.getElementById('sound-toggle-btn');

  function toggleCafeSound() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!isPlayingSound) {
      // Create a gentle warm harmonic drone resembling a distant Parisian bistro chime
      const now = audioCtx.currentTime;
      const gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.exponentialRampToValueAtTime(0.08, now + 1.5);

      // Chords: Warm F major 9th warm acoustic vibe (F3, A3, C4, E4, G4)
      const freqs = [174.61, 220.00, 261.63, 329.63, 392.00];
      const oscs = freqs.map((f, i) => {
        const osc = audioCtx.createOscillator();
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(f, now);

        // subtle detune for warm vintage feel
        osc.detune.setValueAtTime((Math.random() - 0.5) * 8, now);

        const subGain = audioCtx.createGain();
        subGain.gain.setValueAtTime(0.2 / freqs.length, now);

        osc.connect(subGain);
        subGain.connect(gainNode);
        osc.start();
        return osc;
      });

      gainNode.connect(audioCtx.destination);
      soundNodes = { oscs, gainNode };
      isPlayingSound = true;

      if (soundToggleBtn) {
        soundToggleBtn.classList.add('playing');
        soundToggleBtn.querySelector('.sound-label').textContent = 'Pause Tone';
      }
      showToast('🎵 Ambiance acoustique Bon! activée.');
    } else {
      if (soundNodes.gainNode) {
        const now = audioCtx.currentTime;
        soundNodes.gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
        setTimeout(() => {
          soundNodes.oscs.forEach(o => o.stop());
          soundNodes = [];
        }, 900);
      }
      isPlayingSound = false;

      if (soundToggleBtn) {
        soundToggleBtn.classList.remove('playing');
        soundToggleBtn.querySelector('.sound-label').textContent = 'Café Sound';
      }
      showToast('Ambiance sound muted.');
    }
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', toggleCafeSound);
  }

  /* ==========================================================================
     08. MOBILE DRAWER CURTAIN
     ========================================================================== */
  const mobileToggle = document.getElementById('mobile-toggle');
  const curtainClose = document.getElementById('curtain-close');
  const mobileCurtain = document.getElementById('mobile-curtain');
  const curtainLinks = document.querySelectorAll('.curtain-link');

  function openCurtain() {
    if (mobileCurtain) {
      mobileCurtain.classList.add('open');
      mobileCurtain.setAttribute('aria-hidden', 'false');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCurtain() {
    if (mobileCurtain) {
      mobileCurtain.classList.remove('open');
      mobileCurtain.setAttribute('aria-hidden', 'true');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openCurtain);
  if (curtainClose) curtainClose.addEventListener('click', closeCurtain);
  curtainLinks.forEach(link => link.addEventListener('click', closeCurtain));

  /* ==========================================================================
     09. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById('bon-toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // Initial setup
  attachTrayAddListeners();
  updateTrayReceipt();
});
