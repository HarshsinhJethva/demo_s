import { StyleSheet, View } from 'react-native';
import React from 'react';
import { CardContainer, Container, List, SvgIcon, Text } from '@components';
import useProductList from '@hooks/common/useProduct';
import Image from 'src/components/common/image';
import { responsive } from '@utils';
import colors from '@assets/colors';
import useStyles from './styles';

const Dashboard = () => {
  const { products } = useProductList();
  const styles = useStyles();
  console.log(products);
  return (
    <Container>
      <View style={styles.conatainer}>
        <Text value={'Hello Renzo!'} style={styles.name} />
        <Text value={'Are you ready to dance?'} style={styles.nameDetails} />
      </View>

      <List
        data={products}
        renderItem={({ item }) => {
          // console.log(item);
          return (
            <CardContainer>
              <View style={styles.containerView}>
                <View
                  style={{ flexDirection: 'row', gap: responsive.height(1) }}
                >
                  <Image
                    source={{ uri: item?.event_profile_img }}
                    style={styles.image}
                  />
                  <View>
                    <Text
                      value={item?.event_name}
                      bold
                      style={styles.event_name}
                    />
                    <Text
                      value={`${item?.event_price_from} - ${item?.event_price_to}`}
                      style={styles.event_price_from}
                    />
                    <Text
                      value={`€ ${item?.event_price_from} -  € ${item?.event_price_to}`}
                    />
                    <View style={styles.containerView}>
                      <Text value={'Not'} style={styles.not} />
                      not
                      <Text value={'Not'} style={styles.not} />
                    </View>
                  </View>
                </View>
                <View style={styles.lastView}>
                  <SvgIcon name="Right" style={styles.svgLast} />
                  <Text value={`${item?.city}, ${item?.country}`} />
                  <View style={styles.svgLastView}>
                    <SvgIcon name="Download" style={styles.svgLast} />
                    <SvgIcon name="Like" style={styles.svgLast} />
                  </View>
                </View>
              </View>
            </CardContainer>
          );
        }}
      />
    </Container>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
