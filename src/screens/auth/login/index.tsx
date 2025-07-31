import { StyleSheet, View } from 'react-native'
import React from 'react'
import useProductList from '@hooks/common/useProduct'
import { Container, List, Text } from '@components'

const Login = () => {
  const { products } = useProductList()
  console.log("products=====>>>",products)

  // const products = [
  //   {
  //     id: 1,
  //     title: 'Essence Mascara Lash Princess',
  //     description: 'Volumizing mascara with long-lasting formula.',
  //     category: 'Beauty',
  //     price: 9.99,
  //     thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
  //   },
  //   {
  //     id: 2,
  //     title: 'Apple iPhone 14',
  //     description: 'Latest Apple smartphone with A15 chip.',
  //     category: 'Electronics',
  //     price: 799.99,
  //     thumbnail: 'https://cdn.dummyjson.com/product-images/phones/iphone-14/thumbnail.webp',
  //   },
  //   {
  //     id: 3,
  //     title: 'Nike Air Max 270',
  //     description: 'Stylish and comfortable sports shoes.',
  //     category: 'Footwear',
  //     price: 119.99,
  //     thumbnail: 'https://cdn.dummyjson.com/product-images/shoes/nike-air-max-270/thumbnail.webp',
  //   },
  //   {
  //     id: 4,
  //     title: 'Samsung Galaxy Tab S7',
  //     description: 'High-performance Android tablet with S Pen.',
  //     category: 'Electronics',
  //     price: 499.99,
  //     thumbnail: 'https://cdn.dummyjson.com/product-images/tablets/samsung-tab-s7/thumbnail.webp',
  //   },
  //   {
  //     id: 5,
  //     title: 'Levi’s Denim Jacket',
  //     description: 'Classic blue denim jacket for all seasons.',
  //     category: 'Clothing',
  //     price: 69.99,
  //     thumbnail: 'https://cdn.dummyjson.com/product-images/clothing/levis-denim-jacket/thumbnail.webp',
  //   },
  // ];



  return (
    <Container title='Dashboard' dashboard>
      <Text value={"hello"} />
      <List
        data={products}
        renderItem={({ item }) => {
          console.log("item ====>>>", item)
          return (
            <Text value={item?.title} />
          )
        }}
      />

    </Container>
  )
}

export default Login

const styles = StyleSheet.create({})