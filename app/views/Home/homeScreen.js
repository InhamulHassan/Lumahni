import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavigationScreenProps, NavigationEvents } from "react-navigation";
import { ActivityIndicator, Text, StyleSheet, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import { FlatGrid } from "react-native-super-grid";
import { getBooks, resetGetBooks } from "../../redux/actions/bookDbAction";
import BookCard from "../../components/BookCard";
import styles from "./styles";

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  componentWillUnmount() {
    this.props.resetGetBooks();
  }

  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    headerTitle: "Home",
    headerTransparent: true,
    headerLeft: (
      <Icon
        name="menu"
        size={25}
        color="#3d3d3d"
        type="ionicons"
        containerStyle={styles.menuIcon}
        onPress={() => navigation.toggleDrawer()}
      />
    ),
    headerRight: (
      <View style={styles.iconContainer}>
        <Icon
          name="search"
          size={25}
          color="#3d3d3d"
          type="ionicons"
          onPress={() => navigation.navigate("SearchScreen")}
        />
        <Icon
          name="sort"
          size={25}
          color="#3d3d3d"
          type="ionicons"
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
    )
  });

  renderBooks = () => {
    const { books, loading, error, navigation } = this.props;

    if (loading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text style={styles.errorText}>{error.message}</Text>;
    }

    if (!books) return null;

    if (books.length === 0) {
      return <Text style={styles.homeText}>There are no books available</Text>;
    }

    return (
      <FlatGrid
        itemDimension={100}
        items={books}
        renderItem={({ item, index }) => {
          return (
            <BookCard
              key={index}
              book={item}
              onPress={() =>
                navigation.navigate("BookScreen", {
                  bookId: item.id,
                  bookGrid: item.grid
                })
              }
            />
          );
        }}
      />
    );
  };

  render() {
    const {
      books,
      loading,
      error,
      getBooks,
      resetGetBooks,
      navigation
    } = this.props;
    return (
      <View style={styles.rootView}>
        {/* <NavigationEvents
          onWillFocus={getBooks}
        /> */}
        {/* <NavigationEvents
          onWillFocus={this._getBooks}
          onWillBlur={this._resetGetBooks}
        /> */}
        {/* <HomeText>I am home</HomeText>
        <HomeButton
          title="Home Drawer"
          onPress={() => navigate("LoginScreen")}
        /> */}
        {this.renderBooks()}
      </View>
      // {/* <Button title={detailStrings.detailTitle} onPress={() => navigate("DetailScreen")} />
      // <Button title={optionStrings.optionsTitle} onPress={() => navigate("OptionsScreen")} /> */}
    );
  }
}

HomeScreen.propTypes = {
  getBooks: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

HomeScreen.defaultProps = {
  books: {},
  loading: true,
  error: ""
};

const mapStateToProps = state => {
  return {
    books: state.book.data,
    loading: state.book.dataLoading,
    error: state.book.error
  };
};

const mapDispatchToProps = {
  getBooks,
  resetGetBooks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
