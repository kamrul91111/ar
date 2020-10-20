import React from 'react';
import { ScrollView, Text, View, StyleSheet, Image, StatusBar, TouchableOpacity, Linking } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';
import NavigationBar from 'react-native-navbar-color'

class Bugs extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const {navigation} = this.props;

    return (
        <ScrollView style={styles.container}>
          <StatusBar backgroundColor = '#d40000' />
          <Text style={styles.h1}>Bugs</Text>
          <Text style={styles.h2}>1)	Scale: Scale sounds and looks a lot like a plant disease, but the term actually refers to infestation by any one of more than 7,000 species of tiny sap-sucking insects. Scale insects typically adhere to the stems, branches, and sometimes the leaves of plants to feed on sap, and they have a shell-like bump appearance, which sometimes causes them to be mistaken for a fungal or bacterial disease.
              Treatment: Scale insects can overwinter as nymphs or eggs tucked away in tree bark. Spray recently infested plants with horticultural oil in late spring just before the leaves unfurl. This application will smother the scale before the insects have a chance to form their protective coating.
              If you catch the problem early, pruning infected branches is often the easiest and surest solution. Inspect the plant thoroughly, as well as any adjacent plants, to ensure you have gotten all infested stems.
              If infestations are light, individual scale bumps can be dabbed with rubbing alcohol. This can be quite laborious in an outdoor garden, however.
              Insecticidal soaps can be used to kill scale at the larval stage, but they are not very effective once the insects are anchored and feeding under their protective shells. Several applications will be necessary to catch all the larvae, but these organic pesticides will not leave a dangerous environmental residue.
          </Text>
          <Image 
              source={{uri :'https://www.guide-to-houseplants.com/images/scale-insects-on-leaf.jpg'}}
              style={styles.thumbnail}
          />
          <Text style={styles.h2}>2)	Leaf Spot: Fungal leaf spot can be found in your outdoor garden as well as on your houseplant. Spotted leaves occur when fungal spores in the air find a warm, wet, plant surface to cling to. As soon as that microscopic spore gets comfortable in its new home, sporulation (the fungal method of reproduction) occurs and the tiny brown fungal leaf spot begins to grow.
              Treatment: For houseplants, isolate the pot immediately to prevent the fungus from spreading. Remove any leaf that has been affected. Stop misting. In the garden, the plant’s leaf spot treatment depends on preference. For organic treatment, there are several safe and convenient treatments available. Most contain sulphur or copper octanate. Or you can try a more traditional treatment by spraying with a mild solution of bicarbonate of soda (baking soda), using ½ teaspoon per gallon (2.5 mL per 4 L) of water. For those gardeners who have no objection, many all-purpose fungicides are available. Please read the label carefully before applying.
              </Text>
          <Image 
              source={{uri :'https://extension.umn.edu/sites/extension.umn.edu/files/styles/crop_featured_image_crop/public/marssonia-leaf-spot-on-euonymus-grabowski.jpg?h=d7856bc0&itok=6Xt6_yG_'}}
              style={styles.thumbnail}
          />
                    <Text style={styles.h2}>3)	Aphids: Aphids are small (1/8 inch long), soft bodied, pear-shaped insects that may be green, yellow, brown, red or black in colour depending on species and food source. Generally adults are wingless, but some can grow wings, especially if populations are high. They have two whip-like antennae at the tip of the head and a pair of tube-like structures, called cornicles, projecting backward out of their hind end.
Treatment: Try spraying cold water on the leaves; sometimes all aphids need is a cool blast to dislodge them. Typically they are unable to find their way back to the same plant.
If you have a large aphid invasion, dust plants with flour. It constipates the pests.

              </Text>
          <Image 
              source={{uri :'data:image/jpeg;base64,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'}}
              style={styles.thumbnail}
          />
                              <Text style={styles.h2}>4)	Smut Fungus: Smut is characterized by fungal spores that accumulate in sootlike masses called sori, which are formed within blisters in seeds, leaves, stems, flower parts, and bulbs. The sori usually break up into a black powder that is readily dispersed by the wind.
Treatment: When you notice galls on your corn, remove them promptly and dispose of them in a safe way by burning them or throwing them in the garbage. Any pruners, knife or other tools that you used to remove the galls must be disinfected with a 10 percent bleach solution (one part bleach to nine parts water) between the cuts to prevent the fungus from spreading from one location to another.


              </Text>
          <Image 
              source={{uri :'http://www.eattheweeds.com/wp-content/uploads/2017/09/1-corn-smut-2.jpg'}}
              style={styles.thumbnail}
          />
          <Text style={styles.h2}>8)	Spider mites: Spider mites on houseplants and outdoor plants is a common problem. Spider mite damage can not only make a plant look unsightly, it can even kill the plant. It is important to use a spider mite treatment as soon as possible on an affected plant in order to keep the plant looking its best and healthiest. Keep reading to learn more about how to identify and kill spider mites. Initially, spider mite damage will appear as small yellow or brown spots on the leaves of the plant. If the plant is badly infested, the plant’s health will suffer, it may develop completely yellow leaves and it may stop growing.
Treatment: One natural spider mite remedy is to simply spray down the plant with a nozzled hose. The force of the stream of water is enough to knock most of the spider mites off of the plant. Another effective spider mite treatment is to use an insecticidal oil, like neem oil, a horticultural oil or a dormant oil. You can also try using a miticide, as this will kill them. You should not try to use a common pesticide for spider mite treatment as they are resistant to pesticides. Using a pesticide will only kill off the beneficial bugs that eat spider mites, which will only make the spider mite infestation worse.
              </Text>
          <Image 
              source={{uri :'https://gardeningheavn.com/wp-content/uploads/2019/05/Tetranychus20urticae8-Castner-1024x687.jpg'}}
              style={styles.thumbnail}
          />
      <TouchableOpacity
        style={styles.button}
        onPress={ ()=> Linking.openURL('https://www.terracastproducts.com/6-harmful-house-plant-bugs-get-rid//') }
      >
        <Text style={styles.buttonText}>Find more about Plant Bugs</Text>
      </TouchableOpacity>
      </ScrollView>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffe7e7'
  },
  thumbnail: {
    width: 350,
    height: 200,
    padding: 10,
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 20,
  },
  header: {
    fontSize: 17,
    padding: 10,
    fontFamily: 'Roboto',
    textAlign: "center"
  },
  h1: {
    textAlign: "center",
    fontSize: 35,
    color: 'black',
    marginTop: 10,
    textShadowColor: '#666',
    textShadowRadius: 6,
  },
  h2: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 10,
    fontFamily: 'Roboto',
    padding: 10
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#5e0000",
    padding: 10,
    marginBottom: 10,
    width: 300,
    marginTop: 5

  },
  buttonText: {
    color: 'white',
    textAlign: "center"
  }
});



export default Bugs;
